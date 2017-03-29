// Карусели на главной

if(document.body.clientWidth<600 && document.querySelector('.gallery-wrapper')){

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

if(document.body.clientWidth<600 && document.querySelector('.categor-wrapper')){

   var gallery = document.querySelectorAll('.categor-wrapper');
   for(i=0; i<gallery.length; i++) {
      
      gallery[i].style.height = "225px";
      gallery[i].className += ' owl-carousel owl-theme';
      
   }


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

$('.owl-carousel-way').owlCarousel({
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
  $(".categor-wrapper").customScroll();
});


$('.rotation').click(function(){

   $(this).toggleClass('rot');

});
