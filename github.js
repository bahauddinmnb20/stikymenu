 $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
         $(".stiky").removeClass("scroll-header");
        }else{
         $(".stiky").addClass("scroll-header");
        }
       });