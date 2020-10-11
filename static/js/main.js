$(document).ready(function () {
  $("#hello").hide();
  $("#kenny").hide();
  $("#kenny").show(1500);
  $("#hello").fadeIn(2800);
  $(".resume-btn").hide();
  $(".resume-btn").fadeIn(2000);

  let scrollLink = $(".scroll");

  // Smooth scrolling
  // Add smooth scrolling to all links
  scrollLink.click(function (e) {
    // Make sure this.hash has a value before overriding default behavior
    // this.hash reads the href attribute of this, and gets the part of the URL beginning with #
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      e.preventDefault();
      const hash = this.hash;
      $("body, html").animate({
          //animate is looking for a css properties, in this case scrollTop is the property
          scrollTop: $(hash).offset().top - 63.5, //scrollTop looks at the location of the scrollbar.
        },
        800
      );
    }
  });

  // Collapses menu on click. Using Bootstrap Collapse component via JS methods
  $(".nav-item").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  //Reset Carousel. Using Bootstrap Carousel method
  $(".project-image").click(function () {
    $(".carousel").carousel(0);
  });
});