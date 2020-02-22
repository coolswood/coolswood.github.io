var menuItem = document.querySelectorAll('.menu-item');

const scroll = (e) => {
    e.preventDefault();
    var href = e.target.getAttribute('href');
    var target = document.querySelector(href);

    $('html, body').animate({
        scrollTop: $(target).offset().top - 90
    }, 500);

}

menuItem.forEach(i => {
    i.addEventListener('click', scroll)
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    autoHeight:true
});

$('.lightzoom').lightzoom({
    isOverlayClickClosing: true,
    isEscClosing: true
});