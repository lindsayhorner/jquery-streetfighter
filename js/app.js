$(document).ready(function() {

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  }); 
});

$(document).keydown(function() {
  if (keyCode = 88) {
    $('.ryu-ready').hide();
     $('.ryu-chill').show();
  }
 })
  .keyup(function() {
   if (keyup = 88) {
    $('.ryu-chill').hide();
       $('.ryu-ready').show();
    }
 });

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}