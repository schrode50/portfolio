(function(module) {
  var project = {};

  var render = function(article) {
    var template = Handlebars.compile($('#article-template').text());
    console.log('inside render');
    this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    this.publishStatus = this.date ? 'Last worked on ' + this.daysAgo + ' days ago' : '(not hosted)';
    return template(this);
  };

  project.init = function() {
    var $list = $('#full_list');
    $list.empty();
    Work.allJobs.forEach(function(a) {
      $('#full_list').append(render(a));
    });
  };

  module.project = project;
})(window);
