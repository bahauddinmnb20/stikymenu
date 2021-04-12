
$(document).ready(function(){

    $('.active-slaider').slick({
        infinite: true,
        dots: true,
        fade: true,
        slidesToShow: 1,
        autoplay:false,
        autoplaySpeed: (5000),
        arrows:false,
        slidesToScroll: 1
        });

        
$('.puthfuly-active').slick({
    centerMode: true,
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-right"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-left"></i></button>',
    centerPadding: '550px',
    slidesToShow: 1,
    slidesToScroll: 1,
  
  });


 
  $('.brand-active').slick({
    infinite: true,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed: (5000),
    arrows:false,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.award-active').slick({
    infinite: true,
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed: (5000),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('select').niceSelect();

  $('.counters').counterUp({
delay: 10,
time: 1000
});



})


