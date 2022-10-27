// слайдер
$(".owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    center: true,
    items: 1,
    pagination: false,
});

// переключатель языка
$('.lang_list').slideUp(0)

let lngOpened = false;

$('.lang_trigger').on('click', function () {
    $('.lang_list').slideToggle();

    lngOpened = !lngOpened;

    $(this).find('svg').css({
        transform: `rotate(${lngOpened ? 180 : 0}deg)`,
    })
})

$('.button_menu').on('click', function () {
    $('.site-navigation').css({
        transform: 'translateX(0)'
    })
});

$('.cross_svg').on('click', function () {
    $('.site-navigation').css({
        transform: 'translateX(100%)'
    })
});

$(document).ready(function () {
    if (document.documentElement.clientWidth < 321) {
        document.querySelector('.brands__list').classList.add('owl-carousel')
        document.querySelector('.brands__list').classList.add('owl-theme')
        $(".owl-carousel").owlCarousel({
            loop: true,
            dots: true,
            center: true,
            items: 1,
            pagination: false,
        });
    }
});