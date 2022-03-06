$(function(){
    $(".top_silde img:not(:first-child)").hide();
    setInterval(function() {
      $(".top_silde img:first-child").fadeOut(1000).next("img").fadeIn(2000)},5000);
    });
    $('.slide').slick({
      infinite:false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 780, //399px以下のサイズに適用
            settings: {
            slidesToShow: 2,
            },
          },
        ],
    });
    (function($) {
      var $nav   = $('#navArea');
      var $btn   = $('.toggle_btn');
      var $mask  = $('#mask');
      var open   = 'open'; // class
      // menu open close
      $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
          $nav.addClass( open );
        } else {
          $nav.removeClass( open );
        }
      });
      // mask close
      $mask.on('click', function() {
        $nav.removeClass( open );
      });
    } )(jQuery);
    $('.coffee').addClass('on');