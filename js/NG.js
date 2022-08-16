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
  const s1h3offset = $(".sc1 .title-area h3:first-child").offset().top;
  const s3offset = $(".sc3").offset().top;
  const s4offset = $(".sc4").offset().top;
  const s4poffset = $(".sc4 .article-area article p").offset().top;
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

    if (nowScrollTop >= s1h3offset) {
      $(".sc1 .article-area article:nth-child(1)").css({
        transform: "translateY(" + -nowScrollTop * 0.1 + "px)",
      });
      $(".sc1 .article-area article:nth-child(2)").css({
        transform: "translateY(" + -nowScrollTop * 0.15 + "px)",
      });
      $(".sc1 .article-area article:nth-child(3)").css({
        transform: "translateY(" + -nowScrollTop * 0.08 + "px)",
      });
    } else {
      $(".sc1 .article-area article:nth-child(1)").css({
        transform: "",
      });
      $(".sc1 .article-area article:nth-child(2)").css({
        transform: "",
      });
      $(".sc1 .article-area article:nth-child(3)").css({
        transform: "",
      });
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

    if (nowScrollTop >= s4poffset) {
      $(".sc5 .text-area").addClass("active");
    } else {
      $(".sc5 .text-area").removeClass("active");
    }
  });
});
