(function($) {
    ("use strict");
    var windowOn = $(window);
    $(window).on("load", function(event) {
        $(".preloader").delay(500).fadeOut(500);
    });
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });
    $(".sidebar-toggle-btn").on("click", function() {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function() {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".header__search-3").removeClass("search-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".search-toggle").on("click", function() {
        $(".search__area").addClass("opened");
    });
    $(".search-close-btn").on("click", function() {
        $(".search__area").removeClass("opened");
    });
    windowOn.on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });
    $("[data-background").each(function() {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });
    $("[data-bg-color").each(function() {
        $(this).css("background-color", "url( " + $(this).attr("data-bg-color") + "  )");
    });
    $(".main-menu nav > ul > li").slice(-4).addClass("menu-last");
    if (jQuery(".slider__active").length > 0) {
        let sliderActive1 = ".slider__active";
        let sliderInit1 = new Swiper(sliderActive1,{
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            autoplay: true,
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
            a11y: false,
        });
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this).removeClass("anim" + anim).addClass(anim + " animated").css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        $(this).removeClass(anim + " animated");
                    });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
    }
    if (jQuery(".slider__active-2").length > 0) {
        let sliderActive1 = ".slider__active-2";
        let sliderInit1 = new Swiper(sliderActive1,{
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            effect: "fade",
            autoplay: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: ".swiper-paginations",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            a11y: false,
        });
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this).removeClass("anim" + anim).addClass(anim + " animated").css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        $(this).removeClass(anim + " animated");
                    });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
    }
    if (jQuery(".slider__active-3").length > 0) {
        let sliderActive1 = ".slider__active-3";
        let sliderInit1 = new Swiper(sliderActive1,{
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            effect: "fade",
            autoplay: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: ".swiper-paginations",
                clickable: true,
            },
            navigation: {
                nextEl: ".slider-button-prev",
                prevEl: ".slider-button-next",
            },
            a11y: false,
        });
        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this).removeClass("anim" + anim).addClass(anim + " animated").css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        $(this).removeClass(anim + " animated");
                    });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
    }
    $("select").niceSelect();
    $(".grid").imagesLoaded(function() {
        var $grid = $(".grid").isotope({});
        $(".filter-button-group, .dp-filter-button-group").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue
            });
        });
        $(".portfolio-menu button, .dp-portfolio-menu button").on("click", function(event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    });
    var portfolio = new Swiper(".portfolio-slider-active",{
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".portfolio-slider-pagination",
            clickable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    $(".image-popups, .popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });
    $(".popup-video").magnificPopup({
        type: "iframe",
    });
    $(".dot").on("mouseenter", function() {
        $(this).addClass("active").parent().siblings().find(".dot").removeClass("active");
    });
    $(".location-item").on("mouseenter", function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    var handle = $("#custom-handle");
    var slider = $("#slider");
    $("#slider").slider({
        value: 120,
        min: 1,
        max: 250,
        create: function() {
            handle.text($(this).slider("value"));
        },
        slide: function(event, ui) {
            handle.text(ui.value);
        },
    });
    const testimonial = new Swiper(".testimonial-active",{
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    const testimonial2 = new Swiper(".services-two-active",{
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 3,
            },
        },
    });
    if (jQuery(".dp-gallery-active").length > 0) {
        let swiperproject = new Swiper(".dp-gallery-active",{
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            infinite: false,
            centeredSlides: true,
            autoplay: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".services-button-next",
                prevEl: ".services-button-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                dynamicBullets: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        });
    }
    var slider = new Swiper(".dp-gallery-active-03",{
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        autoplay: true,
        pagination: {
            el: ".portfolio-slider-dot-5",
            clickable: true,
        },
        navigation: {
            nextEl: ".dp-gallery-button-next-03",
            prevEl: ".dp-gallery-button-prev-03",
        },
        breakpoints: {
            1600: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    const brand = new Swiper(".brand-active",{
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
                centeredSlides: true,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    const brand2 = new Swiper(".brand-active-2",{
        slidesPerView: 5,
        spaceBetween: 150,
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
                spaceBetween: 120,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 100,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 70,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    const brand3 = new Swiper(".brand-3-active",{
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    var postboxswiper = new Swiper(".postbox-active",{
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".postbox-slider-button-next",
            prevEl: ".postbox-slider-button-prev",
        },
    });
    var wow = new WOW({
        mobile: false,
    });
    wow.init();
    if (jQuery(".blog_gallery_active").length > 0) {
        let ablogimgactive = new Swiper(".blog_gallery_active",{
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-blog-button.slide-next",
                prevEl: ".swiper-blog-button.slide-prev",
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                dynamicBullets: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            },
        });
    }
    $(".cart-minus").click(function() {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $(".cart-plus").click(function() {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    var produc = new Swiper('.dp-related-product-active',{
        slidesPerView: 4,
        spaceBetween: 30,
        slideToClickedSlide: true,
        loop: true,
        autoplay: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".product-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
            },
        },
        navigation: {
            nextEl: ".product-button-next",
            prevEl: ".product-button-prev",
        },
        speed: 1000,
        breakpoints: {
            '1400': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '480': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    $(".slider-range-bar").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
    });
}
)(jQuery);
