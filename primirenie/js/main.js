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