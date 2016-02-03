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

function writeItem(){
  dateSort();
  for (var i = rawData.length - 1 ; i >= 0; i--){
    var item = new Work(rawData[i]);
    item.toHtml(item);
  }
};

writeItem();
