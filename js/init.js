jQuery(document).ready(function($) {

  /* Smooth Scrolling */
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    if (!$target.length) return;

    $('html, body').stop().animate({
      scrollTop: $target.offset().top - 72
    }, 700, 'swing', function() {
      window.location.hash = target;
    });
  });

  /* Highlight current section in navigation */
  var sections = $('section');
  var navigation_links = $('#nav-wrap a');

  sections.waypoint({
    handler: function(event, direction) {
      var active_section = $(this);
      if (direction === 'up') active_section = active_section.prev();

      var id = active_section.attr('id');
      if (!id) return;

      var active_link = $('#nav-wrap a[href="#' + id + '"]');
      navigation_links.parent().removeClass('current');
      active_link.parent().addClass('current');
    },
    offset: '35%'
  });

});
