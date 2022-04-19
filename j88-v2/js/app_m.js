$('.list-notification').slick({
    infinite: true,
    slidesToShow: 1,
    vertical: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
});

$('.list-banner-casino').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
});


//Soccer

$(".soccer1 .box-title-content").click(function () {
    if ($('.soccer1-container').css('display') == 'none') {
        $('.soccer1-container').css('display', 'block');
    } else {
        $('.soccer1-container').css('display', 'none');
    }
});

$(".soccer2 .box-title-content").click(function () {
    if ($('.soccer2-container').css('display') == 'none') {
        $('.soccer2-container').css('display', 'block');
    } else {
        $('.soccer2-container').css('display', 'none');
    }
});

$(".img-soccer").click(function () {
    if ($('.soccer1-container').css('display') == 'none' && $('.soccer2-container').css('display') == 'none') {
        $('.soccer1-container').css('display', 'block');
        $('.soccer2-container').css('display', 'block');
        $(".img-soccer img").attr("src", "../images/up-arrow.png");
    } else {
        $('.soccer1-container').css('display', 'none');
        $('.soccer2-container').css('display', 'none');
        $(".img-soccer img").attr("src", "../images/down-arrow.png");
    }
});


//Basketball
$(".basketball1 .box-title-content").click(function () {
    if ($('.basketball1-container').css('display') == 'none') {
        $('.basketball1-container').css('display', 'block');
    } else {
        $('.basketball1-container').css('display', 'none');
    }
});

$(".basketball2 .box-title-content").click(function () {
    if ($('.basketball2-container').css('display') == 'none') {
        $('.basketball2-container').css('display', 'block');
    } else {
        $('.basketball2-container').css('display', 'none');
    }
});

$(".img-basketball").click(function () {
    if ($('.basketball1-container').css('display') == 'none' && $('.basketball2-container').css('display') == 'none') {
        $('.basketball1-container').css('display', 'block');
        $('.basketball2-container').css('display', 'block');
        $(".img-basketball img").attr("src", "../images/up-arrow.png");
    } else {
        $('.basketball1-container').css('display', 'none');
        $('.basketball2-container').css('display', 'none');
        $(".img-basketball img").attr("src", "../images/down-arrow.png");
    }
});


//tennis
$(".tennis1 .box-title-content").click(function () {
    if ($('.tennis1-container').css('display') == 'none') {
        $('.tennis1-container').css('display', 'block');
    } else {
        $('.tennis1-container').css('display', 'none');
    }
});

$(".tennis2 .box-title-content").click(function () {
    if ($('.tennis2-container').css('display') == 'none') {
        $('.tennis2-container').css('display', 'block');
    } else {
        $('.tennis2-container').css('display', 'none');
    }
});

$(".img-tennis").click(function () {
    if ($('.tennis1-container').css('display') == 'none' && $('.tennis2-container').css('display') == 'none') {
        $('.tennis1-container').css('display', 'block');
        $('.tennis2-container').css('display', 'block');
        $(".img-tennis img").attr("src", "../images/up-arrow.png");
    } else {
        $('.tennis1-container').css('display', 'none');
        $('.tennis2-container').css('display', 'none');
        $(".img-tennis img").attr("src", "../images/down-arrow.png");
    }
});

//baseball
$(".baseball1 .box-title-content").click(function () {
    if ($('.baseball1-container').css('display') == 'none') {
        $('.baseball1-container').css('display', 'block');
    } else {
        $('.baseball1-container').css('display', 'none');
    }
});

$(".baseball2 .box-title-content").click(function () {
    if ($('.baseball2-container').css('display') == 'none') {
        $('.baseball2-container').css('display', 'block');
    } else {
        $('.baseball2-container').css('display', 'none');
    }
});

$(".img-baseball").click(function () {
    if ($('.baseball1-container').css('display') == 'none' && $('.baseball2-container').css('display') == 'none') {
        $('.baseball1-container').css('display', 'block');
        $('.baseball2-container').css('display', 'block');
        $(".img-baseball img").attr("src", "../images/up-arrow.png");
    } else {
        $('.baseball1-container').css('display', 'none');
        $('.baseball2-container').css('display', 'none');
        $(".img-baseball img").attr("src", "../images/down-arrow.png");
    }
});

$(".casino").click(function () {
    $('.page-home').css('display', 'none');
    $('.page-casino').css('display', 'block');
    $(".home .icon-bottom img").attr("src", "../images/home.png");
    $(".casino .icon-bottom img").attr("src", "../images/playing-cards-active.png");

    $(".bottom-nav .home").removeClass("active");
    $(this).addClass("active");
});

$(".home").click(function () {
    $('.page-casino').css('display', 'none');
    $('.page-home').css('display', 'block');
    $(".casino .icon-bottom img").attr("src", "../images/playing-cards.png");
    $(".home .icon-bottom img").attr("src", "../images/home-active.png");

    $(".bottom-nav .casino").removeClass("active");
    $(this).addClass("active");
});
