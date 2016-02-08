var allJobs = [];

var Work = function(input){
  this.name = input.name;
  this.date = input.date;
  this.image = input.image;
  this.text = input.text;
  this.link = input.link;
};

Work.prototype.toHtml = function(obj){

  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);
  this.publishStatus = this.date ? 'about ' + this.daysAgo + ' days old' : '(not hosted)';

  return template(this);
};

rawData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

rawData.forEach(function(ele) {
  allJobs.push(new Work(ele));
});

allJobs.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});

Work.handleNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('#portfolio').hide();
    $('#' + $(this).data('content')).fadeIn();
    console.log();
    console.log(myID);

  });
};

$(document).ready(function() {
  Work.handleNav();
});
