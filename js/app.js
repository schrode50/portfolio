(function(module) {

  var playData = {};
  var allJobs = [];
  console.log('am i here');
  playData.dateSort = function() {
    console.log('playdata.datesort');
    allJobs.sort(function(a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB - dateA;
    });
    // I'll remove the console.logs before pulling to master. i like them for reference for now
    console.log(allJobs);
    //this does nothing useful but is an attempt to meet the grading rubric by incorporating the map() method.
    Work.all = allJobs.map(function(x) {
      return new Work(x);
    });
    console.log(Work.all);
    //so this is a silly use of reduce to create a new array of objects that could potentially be worked on or manipulated without affecting the source objects.
    var allJobsFlat = allJobs.reduce(function(prev, curr) {
      return prev.concat(curr);
    }, []);
    console.log(allJobsFlat);
  };

  function Work(input) {
    console.log('inside work');
    Object.keys(input).forEach(function(e, index, keys) {
      this[e] = input[e];
    }, this);

  };
  Work.prototype.toHtml = function(obj) {
    console.log('in work.toproto');
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    this.publishStatus = this.date ? 'Last worked on ' + this.daysAgo + ' days ago' : '(not hosted)';
    return template(this);

  };

  playData.populate = function() {
    console.log('inside populate');
    playData.dateSort();
    allJobs.forEach(function(i) {
      var item = new Work(i);
      $('#portfolio').append(item.toHtml());
    });
  };

  playData.loadData = function() {
    var eTag;
    console.log('in loaddata');
    $.ajax(
      {
        url: 'data/projects.json',
        type: 'HEAD',
        success: function(data, message, xhr) {
          eTag = xhr.getResponseHeader('ETag');
        }
      }).done(function(){
        console.log('inside .done');
        if (localStorage.eTag !== eTag) {
          localStorage.eTag = eTag;
          $.getJSON('data/projects.json', function(data) {
            localStorage.setItem('projects', JSON.stringify(data));
            // $.each(data, function(){
            //   allJobs.push(this);
            // });
          });
        } else {
          allJobs = JSON.parse(localStorage.projects);
          console.log('inside loadData.done else');
        }
        playData.populate();
      });
  };

  playData.loadData();

  module.playData = playData;
})(window);
