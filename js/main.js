$(function () {
 
    $('.rate-star').rateYo({
      rating: 5,
      starWidth: "12px",
      readуOnly: true
    });
   
    $('.slider__items').slick({ 
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      // infinite: false,
    });

    var mixer = mixitup('.product__box');

    $('.slider__feed-inner__box').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      // infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
    });
  });