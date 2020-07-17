  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    slidesToShow:1,
    centerMode: true,
    centerPadding: '24%',
    focusOnSelect: true,
    dots:true,
    responsive: [
   {
    breakpoint:400, //767px以下のサイズに適用
    settings: {
      slidesToShow:1,
	  arrows:false,
	　centerMode:false,
    }
   }
 ]
 　});

$('.header-text').hide().fadeIn(1500);
$('.face-text').hide().fadeIn(1500);
$('.profile-text').hide().fadeIn(1500);


$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
  $(function() {
  $('#icon0,#icon,#icon2,#icon3,#icon4').ready(
    function(){
  $('#icon0,#icon,#icon2,#icon3,#icon4').fadeIn(1000);
    });
   });
  } else {
    //768pxより大きい時の処理
    $(function() {
  $('#icon0').hover(
    function(){
   $('#text0').fadeIn();
  },
    function(){
   $('#text0').fadeOut();
   });
  
    
  $(function() {
  $('#icon').hover(
    function(){
   $('#text1').fadeIn();
  },
    function(){
   $('#text1').fadeOut();
});
      
    $(function() {
  $('#icon2').hover(
    function(){
   $('#text2').fadeIn();
  },
    function(){
   $('#text2').fadeOut();
});
        
   $(function() {
  $('#icon3').hover(
    function(){
   $('#text3').fadeIn();
  },
    function(){
   $('#text3').fadeOut();
});
       
    $(function() {
  $('#icon4').hover(
    function(){
   $('#text4').fadeIn();
  },
    function(){
   $('#text4').fadeOut();
     });
    });
   });
  });
 });
});
}
});




