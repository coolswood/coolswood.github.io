if (document.body.clientWidth < 600) {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 700) {

            $('.header-nav').fadeIn();

        } else {

            $('.header-nav').fadeOut();

        }

    });
}

$('.open').on('click', function () {
    $(this).siblings('.question-list__down').slideToggle();
    if ($(this).children('.sign').hasClass('minus')) {
        $(this).children('.sign').removeClass('minus');
        $(this).children('.sign').html('+');
    } else {
        $(this).children('.sign').addClass('minus');
        $(this).children('.sign').html('-');
    }

});

$('.recall').on('click', function (e) {
    e.preventDefault();
    $('.popup-order').animate({
        top: 50 + '%'
    }, 500);
    $('.popap-wrap').fadeIn(500);
})

$('.popap-wrap, .close').on('click', function () {
    $('.popap-wrap').fadeOut(500);
    $('.popup-order, .polit').animate({
        top: "-" + 350
    }, 500);
})

$('.close-2').on('click', function () {
    $('.polit').animate({
        top: "-" + 350
    }, 500);
})

$('.conf-check').on('click', function () {
    if ($('.conf-check').prop('checked')) {
        $('.wrapper-form button').attr("disabled", false);
        $('.wrapper-form button').addClass('but')
    } else {
        $('.wrapper-form button').attr("disabled", true);
        $('.wrapper-form button').removeClass('but')
    }
})


$('.conf-text').on('click', function () {
    $('.polit').animate({
        top: 50 + '%'
    }, 500);
})

function ok() {
    $('.popap-suc').animate({
        top: 50 + '%'
    }, 1000);
    $('.popup-order').animate({
        top: -500 + 'px'
    }, 500);
    setTimeout(no, 2000)
}

function no() {
    $('.popap-suc').animate({
        top: -200 + 'px'
    }, 500);
}

$("a.nav-item").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 200;
    $('html,body').animate({
        scrollTop: destination
    }, 1100);
    return false;
});
