(function(module) {
  var repoView = {};
  console.log('reached repoView');

  var ui = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '"> ' + repo.name + '</a>');
  };

  repoView.index = function() {
    ui();
    $('#about ul').append(repos.with('forks_count').map(render));
  };
  
  module.repoView = repoView;
})(window);
