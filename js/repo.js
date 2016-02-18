(function(module) {
  var repos = {};
  repos.all = [];

  repos.requestRepos = function(callback) {
    var repoUrl = 'https://api.github.com/users/schrode50/repos';
    var eTag;
    $.ajax({
      url: repoUrl + '?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + gitToken},
      success: function(data, message, xhr) {
        eTag = xhr.getResponseHeader('eTag');
        console.log(eTag);
        console.log(data);
        repos.all = data;
      }
    }).done(callback);
  };
  
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
