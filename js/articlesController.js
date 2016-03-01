(function(module) {
  var articlesController = {};

  articlesController.index = function() {
    loadData(populate);
    $('main > section').hide();
    $('#full_list').show();
  };
  module.articlesController = articlesController;
})(window);
