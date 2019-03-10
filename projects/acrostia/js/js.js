$(document).ready(function(){

           $(".gamburger").click(function () {
                       if ($(".line__nav").is(":hidden")) {

                               $(".line__nav").show("slow");

                       } else {

                               $(".line__nav").hide("slow");

                       }
 return false;
});
});