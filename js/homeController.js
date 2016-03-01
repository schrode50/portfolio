(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('#about').hide();
    $('#portfolio').show();
  };
  module.homeController = homeController;
})(window);
