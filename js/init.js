(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
      indicators: true,
      fullWidth: true
    });
    $('.carousel1.carousel-slider1').carousel({
      fullWidth: true,
      indicators: true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space