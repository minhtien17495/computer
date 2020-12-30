import $ from 'jquery';
$(()=>{
    $('.o-infoCardCarousel_carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.o-infoCardCarousel_carousel_prev'),
        nextArrow: $('.o-infoCardCarousel_carousel_next'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
      $('.o-centerCarousel').slick({
        dots: true,
        centerMode: true,
        centerPadding:'0',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: false,
              centerPadding: '0',
              slidesToShow: 1,
            },
          },
        ],
      });
});
