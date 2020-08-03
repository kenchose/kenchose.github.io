$(document).ready(function () {
  $("#hello").hide();
  $("#kenny").hide();
  $("#kenny").show(1500);
  $("#hello").fadeIn(2800);
  $(".resume-btn").hide();
  $(".resume-btn").fadeIn(2000);

  let scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("body, html").animate({
          //animate is looking for a css properties
          scrollTop: $(hash).offset().top - 63.5, //scrollTop looks at the location of the scrollbar.
        },
        800
      );
    }
  });

  // Collapses menu on click
  $(".nav-item").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //Reset Carousel
  $(".project-image").click(function () {
    $(".carousel").carousel(0);
  });
});