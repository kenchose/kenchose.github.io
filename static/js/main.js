$(document).ready(function() {
    $("#hello-world").hide();
    $("#kenny").hide();
    $("#kenny").show(1500);
    $("#hello-world").fadeIn(4500);

    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body, html').animate({ //animate is looking for a css properties
        scrollTop: $(this.hash).offset().top - 58 //scrollTop looks at the location of the scrollbar. 
      }, 1000 );
    });
    
    // Active link highlighting
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop(); //measures how far and where you are within the window
      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top;
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active'); //parent = active of which is on the first link
          $(this).parent().siblings().removeClass('active');
        }
      })
    })
  })
  
  