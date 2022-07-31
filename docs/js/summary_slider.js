$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ],
    mobileFirst: true
  });
});
