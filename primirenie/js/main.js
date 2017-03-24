// Карусели на главной

if(document.body.clientWidth<600){

   var gallery = document.querySelector('.gallery-wrapper');
   gallery.className += ' owl-carousel owl-theme';


   $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   responsive:{
      0:{
         items:1
      }
   }
   });

};

$('.owl-carousel-pastor').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Карусели на главной


// Проповеди


//let open = document.querySelectorAll('.play-close');
//for(i=0;i<open.length;i++) {
//
//   prop[i].style.height='150px';
//
//}
