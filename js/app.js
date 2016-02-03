var allJobs = [];

var rawData = [
  {
    name:   'Cookie Stand',
    date:   '2015-12-10',
    image:  '../img/cookie.jpeg',
    text:   'Just a neat project for a store to sell Salmon Cookies. Not hosted',
    link:   'https://github.com/schrode50/cookie-stand'
  },
  {
    name:   'BeerNuts',
    date:   '2015-12-27',
    image:  '../img/beer.jpg',
    text:   'Beer information page with associated triva game',
    link:   'http://laceylin2010.github.io/BeerNuts/'
  }
];

// function Jobs(opts) {
//   this.name = opts.name;
//   this.published = opts.date;
//   this.image = opts.image;
//   this.text = opts.text;
//   this.link = opts.link;
// };
//
// Jobs.prototype.toHtml = function() {
//   var $newJob = $('article.template').clone();
//   // $newJob.find('by-line a').attr('href', this.authorUrl);
//   $newJob.attr('data-category', this.category);
//   $newJob.find('h2').text(this.title);
//   $newJob.find('.desc').html(this.text);
//   $newJob.find('time').html(this.publishedOn);
//
//   $newJob.removeClass('template');
//   $newJob.append(this.body);
//
//
//   $newJob.find('time[pubdate]').attr('title', this.publishedOn);
//
//   $newJob.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//
//   $newJob.append('<hr>');
//
//   $newJob.removeClass('template');
//
//   return $newJob;
// };
//
// rawData.sort(function(a,b) {
//   return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(ele) {
//   allJobs.push(new Jobs(ele));
// });
//
// allJobs.forEach(function(a) {
//   $('#portList').append(a.toHtml());
// });
function dateSort(){
  console.log('hit dateSort');
  rawData.sort(function(a,b){
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);

    return dateA - dateB;
  });
}

var Work = function(input){
  this.name = input.name;
  this.date = input.date;
  this.image = input.image;
  this.text = input.text;
  this.link = input.link;
  // rawData.push(this);
};

Work.prototype.toHtml = function(obj){
  var $newItem = $('li.template').clone();
  $('.template .title').html('<a href="' + obj.link + '">'+ obj.name +'</a>');
  $('.template .date').html(obj.date);
  $('.template .pic').html('<img src="' + obj.image + '">');
  $('.template .desc').text(obj.text);
  $newItem.removeClass('template');
  $('#portfolio').append($newItem);

};
//
// function pageWrite(){
//   dateSort();
//   console.log(rawData);
//   for (var i = rawData.length - 1 ; i >= 0; i--){
//     var $article = $('<li class="item"></li>');
//     $article.append('<div><a href="' + rawData[i].link + '">'+ rawData[i].name +'</a></div>');
//     $article.append('<div>'+ rawData[i].date +'</div>');
//     $article.append('<div>'+ rawData[i].text +'</div>');
//     $article.append('<img src="' + rawData[i].image + '">');
//     console.log($article);
//     $('#portfolio').append($article);
//   }
// }
//
// pageWrite();

function writeItem(){
  dateSort();
  for (var i = rawData.length - 1 ; i >= 0; i--){
    var item = new Work(rawData[i]);
    item.toHtml(item);
  }
};

writeItem();
