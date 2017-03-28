// Карусели на главной

if(document.body.clientWidth<600){

   var gallery = document.querySelector('.gallery-wrapper');
   gallery.className += ' owl-carousel owl-theme';
   
   var gallery = document.querySelector('.catedor-wrapper');
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
            items:3
        },
        1000:{
            items:4
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

// Скролл

  $(document).ready(function() {
    $(".item-header").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top - 10;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
  });

// Скролл

$(document).ready(function() {
  $(".catedor-wrapper").customScroll();
});


$('.rotation').click(function(){

   $(this).toggleClass('rot');

});
