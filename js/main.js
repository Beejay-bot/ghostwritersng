$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  } else {
    $("#header").removeClass("header-scrolled");
  }
});

if ($(window).scrollTop() > 100) {
  $("#header").addClass("header-scrolled");
}


$(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    if (target.length) {
      var top_space = 0;

      if ($("#header").length) {
        top_space = $("#header").outerHeight();

        if (!$("#header").hasClass("header-scrolled")) {
          top_space = top_space - 20;
        }
      }

      $("html, body").animate(
        {
          scrollTop: target.offset().top - top_space,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".nav-menu").length) {
        $(".nav-menu .menu-active").removeClass("menu-active");
        $(this).closest("li").addClass("menu-active");
      }

      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
        $("#mobile-body-overly").fadeOut();
      }
      return false;
    }
  }
});



