// Add a class to the navbar when scrolling down
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scroll');
    } else {
      $('.navbar').removeClass('navbar-scroll');
    }
  });
  