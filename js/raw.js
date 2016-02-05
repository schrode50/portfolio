// Work.populate = function(){
//   dateSort();
//   for (var i = rawData.length - 1 ; i >= 0; i--){
//     var item = new Work(rawData[i]);
//     item.toHtml(item);
//   }
// };

// Work.populate();

// function dateSort(){
//   rawData.sort(function(a,b){
//     var dateA = new Date(a.date);
//     var dateB = new Date(b.date);
//     return dateA - dateB;
//   });
// }
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

// var $newItem = $('li.template').clone();
// $('.template .title').html('<a href="' + obj.link + '">'+ obj.name +'</a>');
// $('.template .date').html('<h3>Published On: ' + obj.date);
// $('.template .pic').html('<img src="' + obj.image + '">');
// $('.template .desc').text(obj.text);
// $newItem.removeClass('template');
// $('#portfolio').append($newItem);

// var ok=$(event.target).text().toLowerCase();
// var myID = $('#' + ok);
// $('#full_list').not(myID).hide();
// var close=$('#' + ok).fadeIn();

// $('#' + $(this).data('content')).fadeIn();
// $('#' + '.tab[data-content="' + $(this).val() + '"]').fadeIn();
// console.log(event.target);
