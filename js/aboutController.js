(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#portfolio').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
