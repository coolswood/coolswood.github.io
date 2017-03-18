$('.burger').on('click', function(){

  $('.header-nav').slideToggle(300, function() {

    if($(this).css('display') === 'none') {

      $(this).removeAttr('style');

    };

  });

});
