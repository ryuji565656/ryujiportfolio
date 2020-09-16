$(function(){
    $('.page-header').each(function () {

        var $window = $(window), // 
            $header = $(this),
            
            headerOffsetTop = $header.offset().top;


        $window.on('scroll', function () {
            
      
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        $window.trigger('scroll');

    });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
