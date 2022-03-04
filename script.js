$(function(){
    $(".top_silde img:not(:first-child)").hide();
    setInterval(function() {
      $(".top_silde img:first-child").fadeOut(1000).next("img").fadeIn(2000)},5000);
    $(function () {
      $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('slide-in');
        $('body').toggleClass('noscroll'); 
      });
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
 
  });