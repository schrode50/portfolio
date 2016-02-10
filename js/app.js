(function(module) {

  var allJobs = [];

  function dateSort(){
    allJobs.sort(function(a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA - dateB;
    });
  }

  var Work = function(input){
    this.name = input.name;
    this.date = input.date;
    this.text = input.text;
    this.link = input.link;
  };

  Work.prototype.toHtml = function(obj){

    var template = Handlebars.compile($('#article-template').text());
    return template(this);

    this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
    this.publishStatus = this.date ? 'about ' + this.daysAgo + ' days old' : '(not hosted)';

  };

  function populate(){
    dateSort();
    allJobs.forEach(function(i) {
    // for (var i = allJobs.length - 1 ; i >= 0; i--){
      var item = new Work(i);
      // var item = new Work(allJobs[i]);
      $('#portfolio').append(item.toHtml());
    });
  };

  $('.home').on('click', function() {
    location.reload();
  });

  Work.handleNav = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('#portfolio').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
  };
  Work.handleNav();

  function loadData(){
    var eTag;
    $.ajax(
      {
        url: 'data/projects.json',
        type: 'HEAD',
        success: function(data, message, xhr){
          eTag = xhr.getResponseHeader('ETag');
        }
      }).done(function(){
        if (localStorage.eTag !== eTag){
          localStorage.eTag = eTag;
          $.getJSON('data/projects.json', function(data){
            localStorage.setItem('projects', JSON.stringify(data));
            // $.each(data, function(){
            //   allJobs.push(this);
            // });
          });
        } else {
          allJobs = JSON.parse(localStorage.projects);
        }
        populate();
      });
  };
  module.loadData = loadData();
})(window);
