(function ($, window, document) {
  $(() => {
    $(".js_nav-scroll").on("click", "a", function (event) {
      let id = $(this).attr("href"),
        top = $(id).offset().top;

      if ($(window).width() < 767) {
        top = top - 50;
      }
      
      $("body,html").animate({ scrollTop: top}, 600);
    });
  });
})(window.jQuery, window, document);
