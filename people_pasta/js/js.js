if(window.screen.width>=982){



$(window).scroll(function(){
   
   var st = $(this).scrollTop();
   
 $(".white_line").css({
      "top" : -st + "px"
   });  
   
 $(".section_2").css({
      "transform": "matrix(1, 0, 0, 1, 0," + (-st/3) + ")"
   });   
   
 $(".section_3").css({
      "transform": "matrix(1, 0, 0, 1, 0," + (-st/3) + ")"
   });   
    
   
   });

};
