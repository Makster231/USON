"use strict";

(function ($, window, document) {
  $(function () {
    $(".js_nav-scroll").on("click", "a", function (event) {
      var id = $(this).attr("href"),
          top = $(id).offset().top;

      if ($(window).width() < 767) {
        top = top - 50;
      }

      $("body,html").animate({
        scrollTop: top
      }, 600);
    });
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map
