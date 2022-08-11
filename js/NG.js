$(function () {
  $(".visual-section .title-area").slick({
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1500,
    pauseOnHover: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const videoOffset = $(".sc2 .video-area").offset().top;
  //   console.log(videoOffset);
  const s3offset = $(".sc3").offset().top;

  $(window).scroll(function () {
    const now = $(this).scrollTop();
    const nowScrollTop = parseInt(now);

    // console.log(nowScrollTop);

    if (nowScrollTop >= videoOffset && nowScrollTop <= s3offset) {
      $(".sc2 .video-area .bg-video").css({
        position: "fixed",
      });
      $(".sc2 .text-area").css({
        position: "fixed",
      });
      $(".sc2 .rolling-banner").css({
        position: "fixed",
      });
      $(".sc2 .scr-down-line").css({
        position: "fixed",
      });
    } else {
      $(".sc2 .video-area .bg-video").css({
        position: "",
      });
      $(".sc2 .text-area").css({
        position: "",
      });
      $(".sc2 .rolling-banner").css({
        position: "",
      });
      $(".sc2 .scr-down-line").css({
        position: "",
      });
    }

    // if (nowScrollTop >= s3offset) {
    //   $(".sc3").css({
    //     position: "fixed",
    //   });
    // }
  });
});
