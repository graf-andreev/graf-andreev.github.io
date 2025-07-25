$(document).ready(function() {
    // Инициализация слайдера преимуществ
    $('.advantages__slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        },
        navText: ['<span>&lt;</span>', '<span>&gt;</span>']
    });

    // Инициализация слайдера сиделок
    $('.caregivers__slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        },
        navText: ['<span>&lt;</span>', '<span>&gt;</span>']
    });

    // Инициализация слайдера отзывов
    $('.reviews__slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        },
        navText: ['<span>&lt;</span>', '<span>&gt;</span>']
    });

    // Настройка отображения точек для всех слайдеров
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        var totalSlides = $carousel.find('.owl-item').length;
        
        // Убеждаемся, что точки отображаются правильно
        $carousel.on('initialized.owl.carousel', function() {
            var dotsContainer = $carousel.find('.owl-dots');
            if (dotsContainer.length) {
                console.log('Слайдер ' + $carousel.attr('class') + ' имеет ' + totalSlides + ' слайдов');
            }
        });
    });

    // Плавная прокрутка для навигации
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Анимация появления элементов при скролле
    function animateOnScroll() {
        $('.service-card, .advantage-card, .step, .caregiver-card, .review-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Добавляем CSS класс для анимации
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .service-card, .advantage-card, .step, .caregiver-card, .review-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .service-card.animate-in, .advantage-card.animate-in, .step.animate-in, .caregiver-card.animate-in, .review-card.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
        `)
        .appendTo('head');

    // Запускаем анимацию при загрузке и скролле
    $(window).on('scroll', animateOnScroll);
    animateOnScroll();



    // Добавление активного состояния для пунктов меню при скролле
    function updateActiveMenuItem() {
        var scrollPosition = $(window).scrollTop() + 100;

        $('section[id]').each(function() {
            var currentSection = $(this);
            var sectionTop = currentSection.offset().top;
            var sectionBottom = sectionTop + currentSection.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var currentId = currentSection.attr('id');
                $('.header__menu a').removeClass('active');
                $('.header__menu a[href="#' + currentId + '"]').addClass('active');
            }
        });
    }

    $(window).on('scroll', updateActiveMenuItem);

    // Добавляем стили для активного пункта меню
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .header__menu a.active {
                color: var(--primary-color) !important;
                font-weight: 600;
            }
        `)
        .appendTo('head');

    // Мобильное меню (для будущего развития)
    function initMobileMenu() {
        if ($(window).width() <= 768) {
            // Здесь можно добавить логику мобильного меню
            console.log('Mobile menu ready for implementation');
        }
    }

    initMobileMenu();
    $(window).on('resize', initMobileMenu);

    // Дополнительные эффекты для карточек
    $('.service-card, .advantage-card, .caregiver-card, .review-card').on('mouseenter', function() {
        $(this).find('h3').css('color', 'var(--primary-dark)');
    }).on('mouseleave', function() {
        $(this).find('h3').css('color', 'var(--primary-color)');
    });



    // Улучшенная обработка ошибок загрузки изображений
    $('img').on('error', function() {
        $(this).attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7Qn9C+0LvRg9GH0LXQvdC90YvQtTwvdGV4dD4KPC9zdmc+');
    });

    // Консольное сообщение о готовности
    console.log('Центр социального обслуживания "Благо(ромашка)дарю" - сайт готов к работе! 🌼');
}); 