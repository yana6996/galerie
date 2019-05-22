$(function(){
  $('.main-visual').hide().fadeIn(2000);
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.thumb',
  });
  $('.thumb').slick({
    asNavFor: '.slider',
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
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
