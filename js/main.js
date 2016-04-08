$(function(){
  var masonryOptions = {
    gutter: 70,
    transitionDuration: '0s',
    fitWidth: true,
    itemSelector: '.posts-list > li'
  };

  var $grid = $('.posts-list').masonry(masonryOptions);

  $(window).on('resize', function(event) {
      var $win = $(this);
      if ($win.width() <= 767) {
        if($grid.data('masonry')) {
          $grid.masonry('destroy')
        }
      } else {
        if(!$grid.data('masonry')) {
          $grid.masonry(masonryOptions);
        }
      }
  });

  var colors = ['#0B24FB', '#F1F100', '#E10F21', '#F29425', '#9C2080', '#44A33C'];
  $('.publication')
  .each(function(i) {
    var $this = $(this);
    $this.css({
      'background-color': colors[i]
    });
  })
  .on('click', function(even) {
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

  $(window).trigger('resize');
});
