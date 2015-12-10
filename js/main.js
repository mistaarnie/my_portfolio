(function($) {

    var main = function() {
        $('.icon-menu').click(function() {
          $('.menu').animate( { left: '0px' }, 200);
          $('body').animate({left: "330px" }, 200);
          $('#overlay').appendTo('body').fadeIn("slow");
        });
      
            
        $('.icon-close, #overlay').click(function() {
          $('.menu').animate( { left: '-330px' }, 200);
          $('body').animate( {left: '0px' }, 200);
          $('#overlay').appendTo('body').fadeOut("slow");
          });
    };
        
    $(document).ready(main);
        

})(jQuery);

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#mobile-menu").fadeToggle();
});
