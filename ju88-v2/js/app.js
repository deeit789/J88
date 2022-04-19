$('.list-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
});

$('.list-game-hot').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,

    prevArrow: `<button type='button' class='slick-prev pull-left btn-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right btn-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`

});