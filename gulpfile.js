/*global require*/
((r) => {
	'use strict';
	const gulp = r('gulp'),
		// https://gulpjs.com/ npm install gulp-cli -g npm install gulp -D npx -p touch nodetouch gulpfile.js
		del = r('del'),
		watch = r('gulp-watch'),
		plumber = r('gulp-plumber'),
		notify = r("gulp-notify"),
		filesize = r('gulp-size'),
		changed = r('gulp-changed'),
		browserSync = r('browser-sync').create(),
		scss = r('gulp-sass'),
		sourcemaps = r('gulp-sourcemaps'), //добавляют размер в два раза		
		autoprefixer = r('gulp-autoprefixer'),
		gcmq = r('gulp-group-css-media-queries'),
		cleanCSS = r('gulp-clean-css'),
		// html_include = r('gulp-file-include'),
		htmlnano = r('gulp-htmlnano'),
		concat = r('gulp-concat'),
		babel = r('gulp-babel'),
		uglify_js = r('gulp-uglify'),
		// npm install --save-dev @babel/core @babel/preset-env
		img_min = r('gulp-imagemin'),
		cache = r('gulp-cache'), //если нету то будет оч тормозить обработка картинок!прям огого как!
		webp = r('gulp-webp');



	let onError = function (err) {
		notify.onError({
			title: "Error in " + err.plugin,
			message: err.message,
			sound: true
		})(err);
		this.emit('end');
	};
	const browsersync = () => {

		browserSync.init({
			server: {
				baseDir: "./production",
			},
			port: 8008,
			notify: false // Отключаем уведомления			
		});
		gulp.watch('developer/index.html', gulp.parallel(html));
		gulp.watch('developer/scss/**/*.scss', gulp.parallel(stylesSCSS));
		gulp.watch('developer/css/**/*.css', gulp.parallel(css));
		gulp.watch(['developer/js/library_js/**/*'], gulp.parallel(before_js_in_production));
		gulp.watch('developer/js/library_js/main.js', gulp.parallel(before_2_js_in_production));
		gulp.watch('developer/js/*.js', gulp.parallel(js));
		gulp.watch('developer/fonts', gulp.parallel(transfer_fonts));
		gulp.watch('developer/img/**/*', gulp.parallel(img_min));
		gulp.watch('developer/fonts/*', gulp.parallel(transfer_fonts));

	};
	const clear = () => {
		return del('production/*');
	};
	// this start tasks for developer///////////////////////////////
	const stylesSCSS = () => {
		del('developer/all.css');
		return gulp.src('developer/scss/all.scss')
		.pipe(sourcemaps.init())
			.pipe(plumber({
				errorHandler: onError
			}))
			.pipe(scss())
			.pipe(sourcemaps.write())
			
		
			.pipe(gulp.dest('developer/css'))
	};


	const css = () => {
		return gulp.src([ 'developer/css/library_css/*.css','developer/css/all.css'])
		.pipe(sourcemaps.init())
			.pipe(changed('production/css'))
			.pipe(concat('all.css'))
			.pipe(filesize({
				title: 'before',
				showFiles: true
			}))
			.pipe(autoprefixer({
				overrideBrowserslist: ['< 0.2%'],
				cascade: true
			}))
			.pipe(sourcemaps.init())
			.pipe(gcmq())
			.pipe(cleanCSS({
				level: 2
			}))
			.pipe(sourcemaps.write())
			// .pipe(plumber.stop())//не ясно зачем возвращать поведение по умолчанию
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('production/css'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
			.pipe(browserSync.stream())
			.pipe(notify({
				message: "scss => css",
				onLast: true,
				sound: false
			}));
	};
	const images = () => {
		return gulp.src('developer/img/**/*')
			.pipe(changed('production/img'))
			.pipe(filesize({
				title: 'before',
				showFiles: true
			}))
			.pipe(
				cache(img_min()))
			.pipe(gulp.dest('production/img'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
			.pipe(browserSync.stream())
			.pipe(notify({
				message: "img",
				onLast: true,
				sound: false
			}));
	};

	const convert_webp = () => {
		gulp.src('developer/img/*.jpg')
			.pipe(webp())
			.pipe(gulp.dest('production'))
	};
	// const html_inc = () => {
	// 	return gulp.src(['developer/html/index.html'])
	// 		.pipe(filesize({
	// 			title: 'before',
	// 			showFiles: true
	// 		}))
	// 		.pipe(plumber({
	// 			errorHandler: onError
	// 		}))

	// 		.pipe(html_include({
	// 			prefix: '@!',
	// 			basepath: '@file'
	// 		}))

	// 		.pipe(gulp.dest('developer'))
	// 		.pipe(filesize({
	// 			title: 'after',
	// 			showFiles: true
	// 		}));
	// };

	const html = () => {
		return gulp.src(['developer/index.html'])
			.pipe(filesize({
				title: 'before',
				showFiles: true
			}))
			.pipe(htmlnano({
				removeComments: true
			}))

			.pipe(gulp.dest('production'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
			.pipe(browserSync.stream())
			.pipe(notify({
				message: "html",
				onLast: true,
				sound: false
			}));
	};

	const before_js_in_production = () => {
		gulp.src('./developer/js/library_js/library/*.js')
			.pipe(changed('developer/js/conected.js'))
			.pipe(concat('conected.js'))
			.pipe(gulp.dest('developer/js'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
	};
	const before_2_js_in_production = () => {
		gulp.src('./developer/js/library_js/main.js')
			.pipe(changed('developer/js'))
			.pipe(plumber({
				errorHandler: onError
			}))
			.pipe(filesize({
				title: 'before',
				showFiles: true
			}))
			.pipe(babel({
				presets: ['env']
			}))
			.pipe(gulp.dest('developer/js'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
	};
	const js = () => {
		gulp.src('developer/js/*.js')
			.pipe(concat('main.js'))
			.pipe(changed('production/js'))
			.pipe(sourcemaps.init())
			.pipe(filesize({
				title: 'before',
				showFiles: true
			}))
			.pipe(uglify_js())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('production/js'))
			.pipe(filesize({
				title: 'after',
				showFiles: true
			}))
			.pipe(browserSync.stream())
			.pipe(notify({
				message: "js.",
				onLast: true,
				sound: false
			}));
	};
	let watches = () => {};

	const transfer_fonts = () => {
		gulp.src('developer/fonts/*')
			.pipe(changed('production'))
			.pipe(gulp.dest('production/css'))
			.pipe(browserSync.stream());
	};
	const transfer_favicon = () => {
		gulp.src('developer/*.ico')
			.pipe(changed('production'))
			.pipe(gulp.dest('production'))
			.pipe(browserSync.stream());
	};
	const build = gulp.series(clear, gulp.parallel(images, browsersync, html, stylesSCSS, css, before_js_in_production, before_2_js_in_production, js, transfer_favicon, transfer_fonts));
	const production = gulp.series(clear,gulp.parallel(images, html, stylesSCSS, css, before_js_in_production, before_2_js_in_production, js, transfer_favicon, transfer_fonts));
	exports.browsersync = browsersync;
	exports.clear = clear;
	exports.stylesSCSS = stylesSCSS;
	exports.css = css;
	exports.images = images;
	exports.js = js;
	exports.watches = watches;
	// exports.html_inc = html_inc;
	exports.before_js_in_production = before_js_in_production;
	exports.transfer_favicon = transfer_favicon;
	exports.transfer_fonts = transfer_fonts;

	exports.prod = production;
	exports.build = build;

	exports.default = build;

})(require);