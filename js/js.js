window.onload = function() {
    let src = document.querySelectorAll('img[lazySrc]');

    for(let i = 0; i < src.length; i++) {
        let srcWay = src[i].getAttribute('lazySrc');
        src[i].setAttribute('src', srcWay);
        src[i].removeAttribute('lazySrc');
    }

    let srcset = document.querySelectorAll('source[lazySrcset]');


    for(let i = 0; i < srcset.length; i++) {
        let srcsetWay = srcset[i].getAttribute('lazySrcset');
        srcset[i].setAttribute('srcset', srcsetWay);
        srcset[i].removeAttribute('lazySrcset');
    }

}
