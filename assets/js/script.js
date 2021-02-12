$(document).ready(function () {
    // Landing page animation
    $("#heading-name").fadeIn(3000);
    $("#heading-title").fadeIn(3000);
    $("#linkedin").fadeIn(3000);
    $("#github").fadeIn(3000);
    $("#facebook").fadeIn(3000);
    $("#facebook").fadeIn(3000);

    // Navbar anchor link aniamation
    $("a[href*='#']").click(function () {
        $(".homepage-bg").animate({height: "50vh"}, 1500);
        return false // stops anchor refreshing the page
    });

    // Navbar
    $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
      $(".cv-nav").addClass("bg-color-nav");
    } else {
      $(".cv-nav").removeClass("bg-color-nav");
    }
  });
});