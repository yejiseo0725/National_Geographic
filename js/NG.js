$(function () {
  const videoOffset = $(".sc2 .video-area").offset().top;
  const mainoffset = $(".visual-section .title-area").offset().top;

  const s1offset = $(".sc1").offset().top;
  const s1artoffset = $(".sc1 .article-area").offset().top;
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

    // Main Visual
    $("header").css({
      top: nowScrollTop * 0.5 + "px",
    });

    $(".visual-section .title-area").css({
      // marginTop: nowScrollTop * 0.3 + "px",
    });

    // Section 1
    const st_Ratio = nowScrollTop - s1offset;
    const stFix_area = $(".scrollFix-area").height();
    const st_value = (st_Ratio / stFix_area) * 100;

    if (nowScrollTop >= s1offset) {
      $(".scrollFix-area .title-area").css({
        position: "fixed",
      });
      $(".rollingTxt.t1").css({
        transform: "translateX(" + -st_Ratio + "px)",
      });
      $(".rollingTxt.t2").css({
        transform: "translateX(" + st_Ratio + "px)",
      });
    } else {
      $(".scrollFix-area .title-area").css({
        position: "",
      });
    }

    const art_Ratio = nowScrollTop - s1artoffset;

    if (nowScrollTop + $winH > s1artoffset) {
      $(".sc1 .article-area .art1").css({
        transform: "translateY(" + -art_Ratio * 0.6 + "px)",
      });
      $(".sc1 .article-area .art2").css({
        transform: "translateY(" + -art_Ratio * 0.9 + "px)",
      });
      $(".sc1 .article-area .art3").css({
        transform: "translateY(" + -art_Ratio * 0.3 + "px)",
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

    if (nowScrollTop >= s4poffset) {
      $(".sc5 .text-area").addClass("active");
    } else {
      $(".sc5 .text-area").removeClass("active");
    }
  });
});
