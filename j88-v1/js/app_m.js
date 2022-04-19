$(".game-menu .sport").on("click", function () {
    $(".game-menu-casino").css("display", "none");
    $(".game-menu-sport").css("display", "block");
    $(".game-menu .sport").addClass("active");
    $(".game-menu .casino").removeClass("active");
    $(".game-menu .sport img").attr("src", "../images/the-thao-xanh.png");
    $(".game-menu .casino img").attr("src", "../images/casino.png");
    $("p").css("background-color");
});

$(".game-menu .casino").on("click", function () {
    $(".game-menu-sport").css("display", "none");
    $(".game-menu-casino").css("display", "block");
    $(".game-menu .casino").addClass("active");
    $(".game-menu .sport").removeClass("active");
    $(".game-menu .casino img").attr("src", "../images/casino-xanh.png");
    $(".game-menu .sport img").attr("src", "../images/the-thao.png");
});

$(".btn-menu").on("click", function () {
    $(".section-menu").css("display", "block");
});

$('.blur').click((e) => {
    if (e.target.id !== 'box-menu' && $(e.target).parents('#box-menu').length === 0) {
        $(".section-menu").css("display", "none");
    }
});

$('.btn-to-right').click(function () {
    event.preventDefault();
    $('#content-menu').animate({
        scrollLeft: "+=150px"
    }, "slow");
});

$('.btn-to-left').click(function () {
    event.preventDefault();
    $('#content-menu').animate({
        scrollLeft: "-=150px"
    }, "slow");
});


$('.list-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: '',
    // fade: true,

    prevArrow: `<button type='button' class='slick-prev pull-left btn-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right btn-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`


});

$('.list-schedule-football').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: '',
    arrows: false,
});

$('.list-hot-game').slick({
    infinite: true,
    slidesToShow: 3,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
});

$('.list-news').slick({
    infinite: true,
    slidesToShow: 3,
    vertical: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
});