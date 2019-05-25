$(function(){
  // メインビジュアルのアニメーション
  $('.main-visual').hide().fadeIn(2000);

  // ここからスライダー
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    asNavFor: '.thumb',
    infinite: true,
  });
  $('.thumb').slick({
    asNavFor: '.slider',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  });
  $(window).scroll(function (){
      $('.profile , .garally , .contact').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
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
