$(function(){
  $('.posts-list').masonry({
    gutter: 70,
    transitionDuration: '0s',
    fitWidth: true,
    itemSelector: '.posts-list > li'
  });

  $('.publication').on('click', function(even) {
    var $this = $(this);
    $this.toggleClass('reveal');
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 50
      }, 1000);
      return false;
    }
  });
});
