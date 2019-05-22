$(function(){
  $('.main-visual').hide().fadeIn(2000);
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
});



/* 自作のやつ
$(function(){
  var count = setInterval(changeImg, 4000);
  i = 1;
  function changeImg(){
//    $("#slideShow").fadeOut(1000);
    $("#slideShow").children('img').attr('src', 'image/mainVisual' + i + ".jpg");
    $("#slideShow").
    if(i <= 1) {
      i++;
    } else {
      i = 1;
    }
  }
});
*/
