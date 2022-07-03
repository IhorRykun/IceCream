$(document).ready(function () {
  $('.reviews__slider').slick({
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
  });
});
