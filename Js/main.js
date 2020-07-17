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

