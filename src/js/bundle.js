const swiper = new Swiper('.banners-slider', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.banners-slider__button--next',
        prevEl: '.banners-slider__button--prev',
    },
    loop: true,
});