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
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

// Карусели на главной



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

// Прокрутка

$(document).ready(function() {
  $(".categor-wrapper").customScroll();
});

// Прокрутка

// Новости

$('.rotation').click(function(){

   $(this).toggleClass('rot');

});

// Плавное появление

$(document).ready(function() {
   setTimeout(function() {
  $(".header-textbox").css('opacity', '1');
  $(".header-nav").css('opacity', '1');
   }, 800);
});

// Плавное появление

// Мобильная навигация 

$('.burger').on('click', function(){

  $('.header-nav').slideToggle(300, function() {
  
    if($('.burger').css('display') === 'none') {
    
      $('.header-nav').removeAttr('style');
   
    
    };
  
  });
  
});
