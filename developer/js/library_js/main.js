// $(function () {


// $(document).ready(function () {
//     $('.slider').bxSlider({
//         controls: false,

//         });
// });
// });
//Start customs ecma javascript////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /////start code for filter in work////////////
    (() => {
        const link = document.querySelectorAll('#work .label ul li');
        let link_all,
            link_webDesign,
            link_mobDesign,
            link_photograpy;
        for (let i = 0; i < link.length; i++) {
            link_all = link[0],
                link_webDesign = link[1],
                link_mobDesign = link[2],
                link_photograpy = link[3];
        }
        const work = document.getElementById('work');

        let item_webDesign = work.getElementsByClassName('web'),
            item_mobDesign = work.getElementsByClassName('mob'),
            item_photograpy = work.getElementsByClassName('photo');

        link_all.addEventListener('click', show_all);
        link_webDesign.addEventListener('click', show_webDesign);
        link_mobDesign.addEventListener('click', show_mobDesign);
        link_photograpy.addEventListener('click', show_photograpy);
        const item = work.getElementsByClassName('item');

        def();

        function def() {
            link_all.classList.add('active');
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add('show');
            }
        }

        function show_all(e) {
            remove_show();
            this.classList.add('active');
            for (let i = 0; i < item.length; i++) {
                item[i].classList.add('show');
            }
        }

        function show_webDesign(e) {
            remove_show();
            this.classList.add('active');
            for (let i = 0; i < item_webDesign.length; i++) {
                item_webDesign[i].classList.add('show');
            }
        }

        function show_mobDesign(e) {
            remove_show();
            this.classList.add('active');
            for (let i = 0; i < item_mobDesign.length; i++) {
                item_mobDesign[i].classList.add('show');
            }
        }

        function show_photograpy(e) {
            remove_show();
            this.classList.add('active');
            for (let i = 0; i < item_photograpy.length; i++) {
                item_photograpy[i].classList.add('show');
            }
        }

        function remove_show() {
            for (let i = 0; i < item.length; i++) {
                item[i].classList.remove('show');
            }
            for (let i = 0; i < link.length; i++) {
                link[i].classList.remove('active');
            }
        }
    })();
    /////end code for filter in work//////////////
    ///start code for anchor/////////////////////////////////////////
    (() => {
        let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
            speed = .55; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
        for (let i = 0; i < linkNav.length; i++) {
            // let id = linkNav[i].href.replace(/[^#]*(.*)/, '$1');
            // for (let i = 0; i < id.length; i++) {
            //     let idPro = id[i];
            //     let idProd = document.querySelector(idPro).getBoundingClientRect().top;
            // }
            // let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            // // if (idProd = scrolled) {

            // // }

            // console.log(id);



            linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
                e.preventDefault(); //отменяем стандартное поведение
                // for (let i = 0; i < li.length; i++) {
                //     li[i].classList.remove('active');
                // }
                let w = window.pageYOffset, // производим прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
                let t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                    start = null;
                requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
                // scroll();
                // const cl = this.parentNode;
                // console.log(cl);
                // this.parentNode.classList.add('active');

                function step(time) {
                    if (start === null) start = time;
                    let progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash // URL с хэшем
                    }
                }
            }, false);
        }
        //  <a href="#one">⇩</a> <!-- ссылка, по клику на которую осуществляется прокрутка к якорю -->
        //  <div id="one" ></div> <!-- якорь, расположенный в произвольном месте страницы --> 
    })();
    ///end code for anchor//////////////////////////////////////////

    //start code for header//////////
    (() => {
        window.addEventListener('resize', header);
        header();

        function header() {

            const idDev = document.querySelectorAll('section');
            let home;
            let about,
                services,
                portfolio,
                testimonials,
                contact;
            for (let i = 0; i < idDev.length; i++) {
                home = idDev[1];
                about = idDev[2];
                services = idDev[4];
                portfolio = idDev[6];
                testimonials = idDev[7];
                contact = idDev[8];
            }
            // home.classList.add('1');
            // about.classList.add('2');
            // services.classList.add('3');
            // portfolio.classList.add('4');
            // testimonials.classList.add('5');
            // contact.classList.add('6');
            // home.getClientRects();
            // let home_offset = home.offsetTop; //if click botton up;
            // let about_offset = about.offsetTop;
            // let services_offset = services.offsetTop;
            // let portfolio_offset = portfolio.offsetTop;
            // let testimonials_offset = testimonials.offsetTop;
            // let contact_offset = contact.offsetTop;

            // let home_distance = home.getBoundingClientRect(); //if click botton up;
            // let about_distance = about.getBoundingClientRect();
            // let services_distance = services.getBoundingClientRect();
            // let portfolio_distance = portfolio.getBoundingClientRect();
            // let testimonials_distance = testimonials.getBoundingClientRect();
            // let contact_distance = contact.getBoundingClientRect();



            let headerDev = document.getElementsByTagName('header');
            let headerProd;
            for (let i = 0; i < headerDev.length; i++) {
                headerProd = headerDev[i];
            }

            function showVisible() {
                // console.log(about.getBoundingClientRect().top);
                // console.log(document.documentElement.clientHeight);
                // console.log(about.getBoundingClientRect().bottom);
                // console.log(contact.getBoundingClientRect().top);           
                if (document.documentElement.clientWidth <= 1279) {
                    headerProd.style.backgroundColor = 'rgba(0,0,0,.5)';
                    document.getElementById('header_menu').style.paddingTop = 12 + 'px';
                    let logo = document.getElementsByClassName('logo');
                    for (let i = 0; i < logo.length; i++) {
                        logo[i].style.paddingTop = 33 + 'px';
                    }
                    cccc();
                } else {
                    if (about.getBoundingClientRect().top <= headerProd.clientHeight / 1.3) {
                        headerProd.style.backgroundColor = 'rgba(0,0,0,.5)';
                        document.getElementById('header_menu').style.paddingTop = 33 + 'px';
                        let logo = document.getElementsByClassName('logo');
                        for (let i = 0; i < logo.length; i++) {
                            logo[i].style.paddingTop = 33 + 'px';
                        }
                    }
                    if (about.getBoundingClientRect().top > headerProd.clientHeight / 1.3) {
                        headerProd.style.backgroundColor = 'rgba(0,0,0,.0)';
                        document.getElementById('header_menu').style.paddingTop = 58 + 'px';
                        let logo = document.getElementsByClassName('logo');
                        for (let i = 0; i < logo.length; i++) {
                            logo[i].style.paddingTop = 58 + 'px';
                        }
                    }
                    cccc();
                }

                function cccc() {
                    if (home.getBoundingClientRect().top <= 0 && home.getBoundingClientRect().bottom >= headerProd.clientHeight) {
                        remove_li_class();
                        add_li_class(0);
                        // console.log("home")
                    }
                    if (about.getBoundingClientRect().top <= headerProd.clientHeight / 1.3 && services.getBoundingClientRect().top > headerProd.clientHeight / 1.3) {
                        remove_li_class();
                        add_li_class(1)
                        // console.log('about')
                    }
                    if (services.getBoundingClientRect().top <= headerProd.clientHeight / 1.3 && portfolio.getBoundingClientRect().top > headerProd.clientHeight / 1.3) {
                        remove_li_class();
                        add_li_class(2)
                        // console.log("services")
                    }
                    if (portfolio.getBoundingClientRect().top <= headerProd.clientHeight / 1.3 && testimonials.getBoundingClientRect().top >= headerProd.clientHeight / 1.3) {
                        remove_li_class();
                        add_li_class(3)
                        // console.log("portfolio")
                    }
                    if (testimonials.getBoundingClientRect().top <= headerProd.clientHeight / 1.3 && contact.getBoundingClientRect().top >= headerProd.clientHeight / 1.3) {
                        remove_li_class();
                        add_li_class(4)
                        // console.log("testimonials")
                    }
                    if (contact.getBoundingClientRect().top <= headerProd.clientHeight / 1.3) {
                        remove_li_class();
                        add_li_class(5)
                        // console.log("contact")
                    }
                }
            }
            window.onscroll = showVisible;
            showVisible();

            function add_li_class(l) {
                const li = document.querySelectorAll('nav ul li');
                for (let i = 0; i < li.length; i++) {
                    li[l].classList.add('hover');
                }
            }

            function remove_li_class() {
                const li = document.querySelectorAll('nav ul li');
                for (let i = 0; i < li.length; i++) {
                    li[i].classList.remove('hover');
                }
            }
        }
    })();
    //end code for header////////////

    //функция=код функции+доступные данные!
    // function click() {
    // 	let c = 0;
    // 	return () => {
    // 		c++;
    // 		console.log(c);
    // 	};
    // }
    // const nav = document.getElementById('header_menu');
    // let d = click();
    // d();
    // d();

    // (() => {
    //     const a = document.querySelectorAll('header nav a');
    //     for (let i = 0; i < a.length; i++) {
    //         a[i].addEventListener('mouseover', () => {
    //             a[i].parentNode.classList.toggle('hover');
    //             // a[i].classList.toggle('hover');
    //         })
    //         a[i].addEventListener('mouseout', () => {
    //             a[i].parentNode.classList.toggle('hover');
    //         })
    //     }
    // })();

    //ползунок///////////////
    // (() => {
    //     let range = document.getElementById('r'), //rng - это Input
    //         div = document.getElementById('test'), // div - блок test
    //         i1 = document.getElementById('i1'); // i1 - input
    //     range.addEventListener('input', () => { // или поставить change
    //         i1.value = range.value;
    //         // div.innerHTML = rng.value;
    //         div.style.width = range.value + 'px';
    //     });
    // })();
    //закончился ползунок////
    //start show_menu_to_click_span////////////////////////////////////
    (() => {
        const nav = document.getElementById('header_menu'),
            button = document.getElementById('click_show_menu'),
            burger = button.getElementsByTagName('SPAN'),
            single = nav.getElementsByClassName('single');
        button.addEventListener('click', toggle_menu, false);
        for (let i = 0; i < single.length; i++) {
            single[i].addEventListener('click', toggle_menu, false);
        }

        function toggle_menu() {
            let show = document.getElementsByClassName('menu');

            // function disableScrolling() {
            //     var x = window.scrollX;
            //     var y = window.scrollY;
            //     window.onscroll = function () {
            //         window.scrollTo(x, y);
            //     };
            // }

            // function enableScrolling() {
            //     //     window.onscroll = function () {};
            // }
            // window.onscroll = false;
            for (let i = 0; i < burger.length; i++) {
                // disableScrolling();
                burger[i].classList.toggle('active');
                break;
            }
            for (let i = 0; i < show.length; i++) {
                // enableScrolling()
                show[i].classList.toggle('active');
                break;
            }
        };
    })();
    //end show_menu_to_click_span/////////////////////////////////////
    //start pop_up_teleport/////////////////////////////////////////////////////////////////////
    // (() => {
    //     const layout = document.getElementById('pop_up_teleport'),
    //         div = layout.getElementsByTagName('div'),
    //         button = document.getElementById('button_pop_up_teleport');
    //     button.addEventListener('click', () => {
    //         layout.style.opacity = '1';
    //         layout.style.visibility = 'visible';
    //         for (let i = 0; i < div.length; i++) {
    //             div[i].style.opacity = '1';
    //             break;
    //         }
    //         setTimeout(() => {
    //             layout.addEventListener('click', () => {
    //                 layout.style.opacity = '0';
    //                 layout.style.visibility = 'hidden';
    //                 for (let i = 0; i < div.length; i++) {
    //                     div[i].style.opacity = '0';
    //                     break;
    //                 }
    //             });
    //         }, 505);
    //     });
    // })();
    //end pop_up_teleport///////////////////////////////////////////////////////////////////////
    //start pop_up_shift/////////////////////////////////////////////////////////////////////
    // (() => {
    //     const layout = document.getElementById('pop_up_shift'),
    //         div = layout.getElementsByTagName('div'),
    //         button = document.getElementById('button_pop_up_shift');
    //     button.addEventListener('click', () => {
    //         layout.style.opacity = '1';
    //         layout.style.visibility = 'visible';
    //         for (let i = 0; i < div.length; i++) {
    //             div[i].style.right = '1vw';
    //             break;
    //         }
    //         setTimeout(() => {
    //             layout.addEventListener('click', () => {
    //                 layout.style.opacity = '0';
    //                 layout.style.visibility = 'hidden';
    //                 for (let i = 0; i < div.length; i++) {
    //                     div[i].style.right = '-21vw';
    //                     break;
    //                 }
    //             });
    //         }, 505);
    //     });
    // })();
    //end pop_up_shift///////////////////////////////////////////////////////////////////////
    //tabs//////////////////////////////////////////////////////////////////////////////////////
    // (() => {
    //     // let all_tabs = document.getElementsByClassName('tab');
    //     // for (let i = 0; i < all_tabs.length; i++) {
    //     //     let tab = document.getElementsByClassName('("tab"+"_"+i)');
    //     //     // alert(tab);
    //     //     for (let i = 0; i < tab.length; i++) {
    //     //         tab[i].style.opacity = '0';
    //     //         alert(tab[i]);
    //     //     }
    //     // }
    //     const tab = document.getElementById('tab_0'),
    //         links = tab.querySelectorAll('.tab_links li'),
    //         tabs = tab.querySelectorAll('.tab_content li');
    //     //start active tab
    //     let index = 0;
    //     tabs[index].classList.add('active');
    //     links[index].classList.add('active');

    //     function add_active(index) {
    //         tabs[index].classList.add('active');
    //         links[index].classList.add('active');
    //     }

    //     function remove_active() {
    //         for (let i = 0; i < links.length; i++) {
    //             links[i].classList.remove('active');
    //         }
    //         for (let i = 0; i < tabs.length; i++) {
    //             tabs[i].classList.remove('active');
    //         }
    //     }
    //     //if click start events and search index in array
    //     for (let i = 0; i < links.length; i++) {
    //         let link = links[i];
    //         link.addEventListener(
    //             'click',
    //             () => {
    //                 remove_active();
    //                 add_active(i);
    //             },
    //             false
    //         );
    //     }
    // })();
    //end tabs//////////////////////////////////////////////////////////////////////////////////////
    //start show copyright year in footer/////////////////////////////////////////////////////////////////////
    (() => {
        let date = new Date(),
            copyright_year = date.getUTCFullYear(),
            where_show = document.getElementById('copyright');
        where_show.innerHTML = '©' + ' ' + copyright_year;
        console.log(date);
    })();
    //end show copyright//////////////////////////////////////////////////////////////////////////////////////
});
$(function () {
    //start code for slider
    $('.slider').bxSlider({
        controls: false,
        // randomStart: true,
        pager: true,
        pagerSelector: 'links',
        pagerCustom: '.links',
        adaptiveHeight: true, //динамическая регулировка высоты слайдера в соответствии с высотой каждого слайда.
        // buildPager: null,
        captions: false

    });
    $('.slider_clients').bxSlider({
        controls: false,
        // randomStart: true,
        pager: true,
        pagerSelector: 'links_clients',
        pagerCustom: '.links_clients',
        adaptiveHeight: true,
        // buildPager: null,
        captions: false

    });
    $('.slider_testimonials').bxSlider({
        controls: false,
        // randomStart: true,
        pager: true,
        pagerSelector: 'links_testimonials',
        pagerCustom: '.links_testimonials',
        adaptiveHeight: true,
        // buildPager: null,
        captions: false

    });
    //end code for slider
});
///lazy dowload foto-img https://plnkr.co/edit/PWfLtSt1JuURXH7kv3nx?p=preview
// <!DOCTYPE html>
// <html>

// <head>
//   <meta charset="utf-8">
//   <style>
//     .news-item {
//       width: 700px;
//       text-align: justify;
//       margin-top: 20px;
//     }

//     .news-item .title {
//       font-weight: bold;
//       margin-bottom: 5px;
//     }
//   </style>
// </head>

// <body>

//   <p>Тексты и картинки взяты с сайта http://etoday.ru. </p>

//   <h3>Все изображения с realsrc загружаются, когда становятся видимыми.</h3>


//   <div class="news-item">
//     <div class="title">Космопорт Америка \ Architecture</div>

//     Будущее уже сейчас! Скоро фраза из фантастического фильма "флипнуть до космопорта" станет реальностью. По крайней мере вторую ее часть человечество обеспечило. В октябре состоялась официальная церемония открытия космопорта «Америка», первой в мире коммерческой
//     площадки для частных космических полетов. Космопорт открылся в пустыне штата Нью-Мексико. Проект был реализован английским бюро Foster and Partners. Космопорт включает в себя зал ожидания и подготовки к полетам, диспетчерский пункт и ангар. Также
//     обеспечена взлетно-посадочная полоса длиной в три километра.

//     <div class="illustrations">
//       <img src="https://js.cx/lazyimg/1.gif" width="200" height="140" realsrc="https://js.cx/lazyimg/1.jpg">
//     </div>
//   </div>

//   <div class="news-item">
//     <div class="title">Рокер и супермодель в Vogue Russia \ Celebrities</div>

//     Супермодель Анна Вялицына (Anne Vyalitsyna) и музыкант Адам Ливайн (Adam Levine) снялись в ноябрьском номере Vogue Russia. Снимал их Аликс Малка (Alix Malka). Анна и Адам примерили на себя рок-н-ролльные наряды от Alexander Wang, Louis Vuitton, Alexander
//     McQueen, Balmain, Yves Saint Laurent, подобранные для них Катериной Мухиной.
//     <div class="illustrations">
//       <img src="https://js.cx/lazyimg/1.gif" width="200" height="259" realsrc="https://js.cx/lazyimg/2-1.jpg">
//       <img src="https://js.cx/lazyimg/1.gif" width="200" height="260" realsrc="https://js.cx/lazyimg/2-2.jpg">
//     </div>
//   </div>

//   <div class="news-item">
//     <div class="title">Старость - не радость в Vogue Italia \ Fashion Photo</div>

//     Стивен Мейзел (Steven Meisel) снял фотосессию для октябрьского Vogue Italia. В съемках приняли участие: Карен Элсон (Karen Elson), Джиневер ван Синус (Guinevere van Seenus), Эмма Балфур (Emma Balfour), Эн Уст (An Oost), Коринна Ингенлеф (Corinna Ingenleuf),
//     Танга Моро (Tanga Moreau), Кордула Рейер (Cordula Reyer), Гейл о`Нил (Gail O'Neil), Эвелин Кун (Evelyn Kuhn), Каролин де Мэгрэ (Caroline de Maigret), Дэльфин Бафор (Delfine Bafort), Кирстен Оуэн (Kirsten Owen), Гунилла Линдблад (Gunilla Lindblad).
//     <div class="illustrations">
//       <img src="https://js.cx/lazyimg/1.gif" width="341" height="474" realsrc="https://js.cx/lazyimg/3-1.jpg">
//       <img src="https://js.cx/lazyimg/1.gif" width="338" height="474" realsrc="https://js.cx/lazyimg/3-2.jpg">
//     </div>
//   </div>

//   <div class="news-item">
//     <div class="title">"Вышитый рентген" Matthew Cox \ Art</div>

//     Художник из Филадельфии Мэтью Кокс (Matthew Cox) создал серию работ, в которых объединены медицинский рентген и вышивка. Художник взял рентгенограммы и вышил их предполагаемое содержание частично со скелетными элементами. Получилось зловеще и интригующе.
//     Выставка "Вышитый рентген" будет демонстрироваться в галерее Packer/Schopf в Майами, в рамках Базельской Художественной Недели. Эта серия - только треть творческой продукции Кокса. Он также создает традиционные картины и иллюстрации.
//     <div class="illustrations"><img src="https://js.cx/lazyimg/1.gif" width="680" height="452" realsrc="https://js.cx/lazyimg/4.jpg"></div>
//   </div>

//   <div class="news-item">
//     <div class="title">Подарочный каталог Apple 1983 \ Creative</div>

//     Etoday предлагает полистать страницы подарочного каталога продукции Apple образца 1983 года. Кажется, это было так давно! Эта серия - только треть творческой продукции Кокса. Он также создает традиционные картины и иллюстрации.
//     <div class="illustrations"><img src="https://js.cx/lazyimg/1.gif" width="600" height="393" realsrc="https://js.cx/lazyimg/5.jpg"></div>
//   </div>

//   <div class="news-item">
//     <div class="title">Винтажные открытки к празднику Halloween \ Illustrations</div>

//     Занимательная коллекция старых почтовых открыток праздника Halloween. Открытки взяты из ньюйоркской публичной библиотеки и датируются примерно 1910 г.

//     <div class="illustrations"><img src="https://js.cx/lazyimg/1.gif" width="680" height="433" realsrc="https://js.cx/lazyimg/6.jpg"></div>
//   </div>

//   <div class="news-item">
//     <div class="title">Фотограф Emily Lee \ Photography</div>

//     Молодой фотограф Эмили Ли (Emily Lee) использует фотографию, чтобы выразить свои чувства. "Когда я смотрю на жизнь через камеру, вижу все более ясно, - пишет она на своем профиле Flickr. - Фотосъемка - это искусство наблюдения." Эмили Ли - обладательница
//     большого таланта и умения глубоко понимать искусство, хотя учится еще только в средней школе.

//     <div class="illustrations"><img src="https://js.cx/lazyimg/1.gif" width="680" height="453" realsrc="https://js.cx/lazyimg/7.jpg"></div>
//   </div>

//   <div class="news-item">
//     <div class="title">Иконы моды в Fashimals \ Creative</div>

//     Fashimals - tumblr-блог, посвященный иконам моды, превращенным в животных. Здесь есть Анна Винтур, Карл Лагерфельд, Терри Ричардсон, а также много других их коллег.

//     <div class="illustrations"><img src="https://js.cx/lazyimg/1.gif" width="600" height="622" realsrc="https://js.cx/lazyimg/8.jpg"></div>
//   </div>


//   <script>
//     /**
//      * Проверяет элемент на попадание в видимую часть экрана.
//      * Для попадания достаточно, чтобы верхняя или нижняя границы элемента были видны.
//      */
//     function isVisible(elem) {

//       var coords = elem.getBoundingClientRect();

//       var windowHeight = document.documentElement.clientHeight;

//       // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
//       var topVisible = coords.top > 0 && coords.top < windowHeight;
//       var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

//       return topVisible || bottomVisible;
//     }

//     /**
//     Вариант проверки, считающий элемент видимым,
//     если он не более чем -1 страница назад или +1 страница вперед

//     function isVisible(elem) {

//       var coords = elem.getBoundingClientRect();

//       var windowHeight = document.documentElement.clientHeight;

//       var extendedTop = -windowHeight;
//       var extendedBottom = 2 * windowHeight;

//       // top visible || bottom visible
//       var topVisible = coords.top > extendedTop && coords.top < extendedBottom;
//       var bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

//       return topVisible || bottomVisible;
//     }
//     */

//     function showVisible() {
//       var imgs = document.getElementsByTagName('img');
//       for (var i = 0; i < imgs.length; i++) {

//         var img = imgs[i];

//         var realsrc = img.getAttribute('realsrc');
//         if (!realsrc) continue;

//         if (isVisible(img)) {
//           img.src = realsrc;
//           img.setAttribute('realsrc', '');
//         }
//       }

//     }

//     window.onscroll = showVisible;
//     showVisible();
//   </script>

// </body>

// </html>