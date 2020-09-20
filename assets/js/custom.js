$(function() {
    
    "use strict";
    

     $(window).on('load', function () {
        
        // preloader 
        var preloaderID = $('#main-preloads');
        preloaderID.addClass('anima');
        setTimeout(function () {

            $('.main-navbar-top').addClass('main-navbar-top-active');
            preloaderID.fadeOut(800);

        }, 1000);
    });
    
    
       //////////////////////////menu active js  
//$('body').scrollspy({ target: '#menu-part' });    
    
    
    // stciky menu
	var nav=$(".navbar");
    $(window).scroll(function(){
        
        var fixmenu = $(this).scrollTop();
        
        if(fixmenu > 185){
            nav.addClass("nav_fixd");
        }
        else{
            nav.removeClass("nav_fixd");
        }  
        
    });
    
    
    //===== banner slider
    
    function mainSlider() {
        var BasicSlider = $('.banner-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.banner-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
             infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right next"></i>',
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //About part slider
   

    $('.sliders_about').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

    });
    
    
    // Portfolio
	$(window).on('load', function () {
		var $container = $('.portfolio');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.portfolioFilter a').on('click', function () {
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	});
    
    
    
    
    /////////////// Counter UP

    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    
    
    
    ///testimonial slider js

    $('.testi_slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa fa-angle-left test-left_arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right test-right_arrow"></i>',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

    });

    
    
    
    
    
    // team part slider js
    $('.team-member').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },  
              
            
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]

    });

     
    // testimonial slider js
	$('.blog-all-item').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		dots: true,
		arrows: false,
		centerMode: true,
        centerPadding: '0',
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
                         {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
           {
                breakpoint: 800,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },   
            
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow:2,
                    slidesToScroll: 1
                }
    },
            
            {
                breakpoint: 481,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

	});
    
    
    $('.partnership-main').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		dots: false,
		arrows: false,
		centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
    },
            {
                breakpoint: 800,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },  
              
            
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow:3,
                    slidesToScroll: 1
                }
    },
            
            {
                breakpoint: 481,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]
	}); 
    


    
   /// back to top
    var bTtop=$(".back_top");
    $(window).on('scroll', function(){
         var baktop = $(window).scrollTop();
        
        if(baktop >200){
            bTtop.fadeIn(1000);
            
        }
        else{
           bTtop.fadeOut(500); 
        }
        
    });
    
    bTtop.on('click', function(){
        $('html, body').animate({
            scrollTop:0,
        }, 2000)
        
    });
    

 $('.venobox').venobox(); 
    
});








