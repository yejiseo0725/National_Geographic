$(function () {
  const videoOffset = $(".sc2 .video-area").offset().top;
  const mainoffset = $(".visual-section .title-area").offset().top;

  const s1offset = $(".sc1").offset().top;
  const s1h3offset = $(".sc1 .title-area").offset().top;
  const s3offset = $(".sc3").offset().top;
  const s4offset = $(".sc4").offset().top;
  const s4poffset = $(".sc4 .article-area article p").offset().top;
  const s5offset = $(".sc5").offset().top;

  const $winH = $(window).height();

  $(window).scroll(function () {
    const now = $(this).scrollTop();
    const nowScrollTop = parseInt(now);
    $(".pos").text(nowScrollTop);

    console.log(nowScrollTop);

    $("header").css({
      top: nowScrollTop * 0.5 + "px",
    });

    $(".visual-section .title-area").css({
      marginTop: nowScrollTop * 0.5 + "px",
    });

    if (nowScrollTop >= s1offset) {
      $(".sc1 .title-area").css({
        transform: "translateY(" + nowScrollTop * 0.4 + "px)",
      });

      $(".sc1 .article-area article:nth-child(1)").css({
        transform: "translateY(" + -nowScrollTop * 0.4 + "px)",
      });
      $(".sc1 .article-area article:nth-child(2)").css({
        transform: "translateY(" + -nowScrollTop * 0.45 + "px)",
      });
      $(".sc1 .article-area article:nth-child(3)").css({
        transform: "translateY(" + -nowScrollTop * 0.35 + "px)",
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
    } else {
      $(".sc2 .video-area .bg-video").css({
        position: "",
      });
      $(".sc2 .text-area").css({
        position: "",
      });
    }

    if (nowScrollTop >= s3offset) {
      $(".box2 .img-area .society-img").addClass("active");
    } else {
      $(".box2 .img-area .society-img").removeClass("active");
    }

    if (nowScrollTop >= s4offset) {
      $(".sc4").css({
        position: "fixed",
      });
    } else {
      $(".sc4").css({
        position: "",
      });
    }

    if (nowScrollTop >= s4poffset) {
      $(".sc5 .text-area").addClass("active");
    } else {
      $(".sc5 .text-area").removeClass("active");
    }

    if (nowScrollTop >= s5offset) {
      $(".sc5").css({
        position: "fixed",
      });
    } else {
      $(".sc5").css({
        position: "",
      });
    }
  });
});
