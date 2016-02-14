(function(module) {

  handleNav = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('#portfolio').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
  };

  $('.home').on('click', function() {
    location.reload();

  });

  module.handleNav = handleNav();
})(window);
