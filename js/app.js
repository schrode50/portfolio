(function(module) {

  var playData = {};
  var allJobs = [];

  playData.dateSort = function() {
    allJobs.sort(function(a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB - dateA;
    });

    Work.all = allJobs.map(function(x) {
      return new Work(x);
    });

    var allJobsFlat = allJobs.reduce(function(prev, curr) {
      return prev.concat(curr);
    }, []);
  };

  function Work(input) {
    Object.keys(input).forEach(function(e, index, keys) {
      this[e] = input[e];
    }, this);

  };
  Work.prototype.toHtml = function(obj) {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    this.publishStatus = this.date ? 'Last worked on ' + this.daysAgo + ' days ago' : '(not hosted)';
    return template(this);

  };

  playData.populate = function() {
    playData.dateSort();
    allJobs.forEach(function(i) {
      var item = new Work(i);
      $('#portfolio').append(item.toHtml());
    });
  };

  playData.loadData = function() {
    var eTag;
    $.ajax(
      {
        url: 'data/projects.json',
        type: 'HEAD',
        success: function(data, message, xhr) {
          eTag = xhr.getResponseHeader('ETag');
        }
      }).done(function(){
        if (localStorage.eTag !== eTag) {
          localStorage.eTag = eTag;
          $.getJSON('data/projects.json', function(data) {
            localStorage.setItem('projects', JSON.stringify(data));
          });
        } else {
          allJobs = JSON.parse(localStorage.projects);
        }
        playData.populate();
      });
  };

  playData.loadData();

  module.playData = playData;
})(window);
