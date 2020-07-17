$(function(){
    $('.page-header').each(function () {

        var $window = $(window), // ウィンドウを jQuery オブジェクト化
            $header = $(this),   // ヘッダーを jQuery オブジェクト化
            // ヘッダーのデフォルト位置を取得
            headerOffsetTop = $header.offset().top;

        // ウィンドウのスクロールイベントを監視
        // (ウィンドウがスクロールするごとに処理を実行する)
        $window.on('scroll', function () {
            // ウィンドウのスクロール量をチェックし、
            // ヘッダーのデフォルト位置を過ぎていればクラスを付与、
            // そうでなければ削除
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });

        // ウィンドウのスクロールイベントを発生させる
        // (ヘッダーの初期位置を調整するため)
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