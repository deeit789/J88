//slect language
$(".drop-lang").on("click", function () {
    $('.dropdown-content').attr('class', 'dropdown-content show');
});

$("#lang-vi").on("click", function () {
    console.log("select vi")
    $(".drop-lang").html("<img src='./images/vi.png' alt=''> Tiếng Việt <ion-icon name='chevron-down-outline'></ion-icon>");
    $('.dropdown-content').attr('class', 'dropdown-content');
});

$("#lang-en").on("click", function () {
    console.log("select en")
    $(".drop-lang").html("<img src='./images/en.png' alt=''> Tiếng Anh <ion-icon name='chevron-down-outline'></ion-icon>");
    $('.dropdown-content').attr('class', 'dropdown-content');
});

$(".btn-dowload-app, .nav-dowload-app, .box-download-app").hover(
    function () {
        $(".nav-dowload-app").css("left", "0");
    },
    function (e) {
        $(".nav-dowload-app").css("left", "-200px");
    }
);

$(".btn-support, .nav-support, .box-support").hover(
    function () {
        $(".nav-support").css("right", "0");
    },
    function (e) {
        $(".nav-support").css("right", "-200px");
    }
);

$('.list-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: '',
    arrows: false,
});


$('.list-sport').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: '',
    arrows: false,
});

$('.list-schedule-next').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: '',
    arrows: false,
    vertical: true,
});

$('.list-fishing').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: '',
    arrows: false,
    vertical: true,
});

// Slide agent
$('.list-agent-left').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // cssEase: '',
    arrows: false,
});

$('.list-agent-right').slick({
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    // cssEase: '',
    arrows: false,
});

$.ajax({
    type: "GET",
    dataType: "json",
    url: "https://soikeo.tv/wp-json/wp/v2/posts?categories=332&_embed",
    success: function (data) {
        console.log(data);

        $('.list-news').html('');
        for (var i = 0; i < data.length; i++) {

            var datetime = moment(data[i].date).format('lll');

            var embeded = data[i]._embedded;
            $('.list-news').append(`<a href="${data[i].link}" target="_blank"><div class="item-news"><div class="img-thumb-news"><img src="${embeded['wp:featuredmedia'][0].source_url}" alt=""></div><div class="content"><h5>${data[i].title.rendered}</h5><h6>${datetime}</h6></div></div></a>`)
        }
    },
    error: function (error) {

        jsonValue = jQuery.parseJSON(error.responseText);
        alert("error" + error.responseText);
    }
});

