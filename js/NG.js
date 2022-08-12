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
  const s5offset = $(".sc5").offset().top;
  const s6offset = $(".sc6").offset().top;
  console.log(s5offset);

  $(window).scroll(function () {
    const now = $(this).scrollTop();
    const nowScrollTop = parseInt(now);
    const $winH = $(window).height();

    console.log(nowScrollTop);

    if (nowScrollTop >= videoOffset && nowScrollTop <= s3offset) {
      $(".sc2 .video-area .bg-video").css({
        position: "fixed",
      });
      $(".sc2 .text-area").css({
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
      $(".sc2 .scr-down-line").css({
        position: "",
      });
    }

    if (nowScrollTop >= s5offset) {
      $(".sc5 .sc5-inner").css({
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      });
    } else {
      $(".sc5 .sc5-inner").css({
        position: "",
        left: "",
        top: "",
        transform: "",
      });
    }

    // if (nowScrollTop + $winH * 0.5 >= s6offset) {
    //   $(".sc6").css({
    //     position: "fixed",
    //   });
    // } else {
    //   $(".sc6").css({
    //     position: "",
    //   });
    // }
  });
});
