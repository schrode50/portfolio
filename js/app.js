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
};

Work.prototype.toHtml = function(obj){
  var $newItem = $('li.template').clone();
  $('.template .title').html('<a href="' + obj.link + '">'+ obj.name +'</a>');
  $('.template .date').html('<h3>Published On: ' + obj.date);
  $('.template .pic').html('<img src="' + obj.image + '">');
  $('.template .desc').text(obj.text);
  $newItem.removeClass('template');
  $('#portfolio').append($newItem);
};

function populate(){
  dateSort();
  for (var i = rawData.length - 1 ; i >= 0; i--){
    var item = new Work(rawData[i]);
    item.toHtml(item);
  }
};
populate();

// $('.tab').on('click', function(event) {
//   var $name = ($(event.target).data('name'));
//   if($(event.target).hasClass('tab')) {
//     $('.tab-content').hide();
//     $('section[data]').fadeIn('fast');
//     console.log(this);
//     console.log($('#' + $name).fadeIn('fast'));
//   }
// });

// Work.handleNav = function() {
//   $('.tab').on('click', function(event) {
//     var $tabContent = $('.tab');
//     var $dataContent = $(this).attr('data-content');
//     $('#full_list').hide();
//     $('.tab[data-name = "'"#" + $(this).val()]).fadeIn();
//     // $tabContent.filter('#' + $dataContent).show();
//     $('this').show('#' + $dataContent);
//     console.log(this);
//   });
// };
// Work.handleNav();

Work.handleNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('#portfolio').hide();
  var myID =  $('#' + $(this).data('content')).fadeIn();
    // var ok=$(event.target).text().toLowerCase();
    // var myID = $('#' + ok);
    // $('#full_list').not(myID).hide();
    // var close=$('#' + ok).fadeIn();

    // $('#' + $(this).data('content')).fadeIn();
    // $('#' + '.tab[data-content="' + $(this).val() + '"]').fadeIn();
    // console.log(event.target);
    console.log($('#' + $(this).data('content')).fadeIn());
    console.log(myID);
    // console.log(close);

  });

};
Work.handleNav();
