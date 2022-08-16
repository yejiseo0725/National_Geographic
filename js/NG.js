$(function () {
  $(".visual-section .title-area").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const videoOffset = $(".sc2 .video-area").offset().top;
  const mainoffset = $(".visual-section .title-area").offset().top;

  const s1offset = $(".sc1").offset().top;
  const s1Titleoffset = $(".sc1 .title-area h3:first-child").offset().top;
  console.log(s1offset, s1Titleoffset);
  const s3offset = $(".sc3").offset().top;
  const s4offset = $(".sc4").offset().top;
  const s5offset = $(".sc5").offset().top;

  const $winH = $(window).height();

  $(window).scroll(function () {
    const now = $(this).scrollTop();
    const nowScrollTop = parseInt(now);

    console.log(nowScrollTop);

    if (nowScrollTop >= mainoffset) {
      $(".sc1 .title-area h3").css({
        transform: "translateX(0)",
      });
    } else {
      $(".sc1 .title-area h3").css({
        transform: "",
      });
    }

    if (nowScrollTop >= s1Titleoffset) {
      $(".sc1 .article-area article:nth-child(1)").css({});
    }

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

    if (nowScrollTop >= s3offset) {
      $(".box2 .img-area .society-img").addClass("active");
    } else {
      $(".box2 .img-area .society-img").removeClass("active");
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
  });
});
