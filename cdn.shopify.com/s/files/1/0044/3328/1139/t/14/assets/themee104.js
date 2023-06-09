(function($) {
  "use strict";

  jQuery(document).ready(function(){


    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
      var scroll = win.scrollTop();
      if (scroll < 200) {
        header.removeClass('stick');
      } else {
        header.addClass('stick');
      }
    });


    /*--
    Cart active
    -----------------------------------*/
    if ($('.cart-wrap').length) {
      var $body = $('body'),
          $cartWrap = $('.cart-wrap'),
          $cartContent = $cartWrap.find('.shopping-cart-content');
      $cartWrap.on('click', '.icon-cart-active', function(e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass('show')) {
          $this.siblings('.shopping-cart-content').addClass('show').parent().addClass('show');
        } else {
          $this.siblings('.shopping-cart-content').removeClass('show').parent().removeClass('show');
        }
      });
      /*Close When Click Close Button*/
      $cartWrap.on('click', '.cart-close', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('.cart-wrap').removeClass('show').find('.shopping-cart-content').removeClass('show');
      });
      /*Close When Click Outside*/
      $body.on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.cart-wrap') && !$($target).parents().is('.cart-wrap') && $cartWrap.hasClass('show')) {
          $cartWrap.removeClass('show');
          $cartContent.removeClass('show');
        }
      });
    }


    /*--
    Setting active
    -----------------------------------*/
    if ($('.setting-wrap').length) {
      var $body2 = $('body'),
          $parloDropdown2 = $('.setting-wrap'),
          $parloDropdownMenu2 = $parloDropdown2.find('.setting-content');
      $parloDropdown2.on('click', '.setting-active', function(e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass('show')) {
          $this.siblings('.setting-content').addClass('show').slideDown().parent().addClass('show');
        } else {
          $this.siblings('.setting-content').removeClass('show').slideUp().parent().removeClass('show');
        }
      });
      /*Close When Click Outside*/
      $body2.on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.setting-wrap') && !$($target).parents().is('.setting-wrap') && $parloDropdown2.hasClass('show')) {
          $parloDropdown2.removeClass('show');
          $parloDropdownMenu2.removeClass('show').slideUp();
        }
      });
    }

    
    
    
    
    
    
    
    
    
    
    
    
      // Section with Editor
      $(document).on('shopify:section:load', function(e){ 
        $('#' + e.target.id).find('[data-section]').sectionJs();
      }).ready(function() {
        $('[data-section]').each(function(){ $(this).sectionJs() });
      });

      
      $.fn.sectionJs = function(){
        var $this = this;
        if($this.data('section') == "BrandSlider") {
          $this.find('.brand_slider_active').BrandSlider();
        }else if($this.data('section') == "Simple_Banner") {
          $this.find('.banner-slider-active').Simple_Banner();
        }else if($this.data('section') == "Best_Collection") {
          $this.find('.blog-slider-active').Best_Collection();
        }else if($this.data('section') == "Collection_Banner") {
          $this.find('.collection-slider-active').Collection_Banner();
        }else if($this.data('section') == "Feature_Collection") {
          $this.find('.feature-product-slider-active').Feature_Collection();        
        }else if($this.data('section') == "Tab_With_Products") {
          $this.find('.product-slider-active').Tab_With_Products();        
        }else if($this.data('section') == "Latest_Blog") {
          $this.find('.blog-slider-active').Latest_Blog();
        }else if($this.data('section') == "About_team") {
          $this.find('.banner-slider-active-team').About_team();
        }else if($this.data('section') == "Related_Products") {
          $this.find('.related-feature-product-slider-active').Related_Products();
          
        }else if($this.data('section') == "Related_Products") {
          $this.find('.related-feature-product-slider-active').Related_Products();
          
        }else if($this.data('section') == "Custom_Collection") {
          $this.find('.custom-feature-product-slider-active').Custom_Collection();
        }else if($this.data('section') == "heroOwlSlider") {
          $this.heroOwlSlider();            
        }else{} 

      }
      

    /*==============All Slick Slider ==================*/
    $.fn.BrandSlider = function() {
      var $BrandSliderVAR = this;
      $BrandSliderVAR.slick({
        infinite: true
      });
    };
    
    $.fn.Simple_Banner = function() {
      var $Simple_BannerVAR = this;
      $Simple_BannerVAR.slick({
        infinite: true
      });
    };

    $.fn.Best_Collection = function() {
      var $Best_CollectionVAR = this;
      $Best_CollectionVAR.slick({
        infinite: true
      });
    };
    $.fn.Feature_Collection = function() {
      var $Feature_CollectionVAR = this;
      $Feature_CollectionVAR.slick({
        infinite: true
      });
    };
    $.fn.Tab_With_Products = function() {
      var $Tab_With_ProductsVAR = this;
      $Tab_With_ProductsVAR.slick({
        infinite: true
      });
    };
    $.fn.Latest_Blog = function() {
      var $Latest_BlogVAR = this;
      $Latest_BlogVAR.slick({
        infinite: true
      });
    };
    $.fn.About_team = function() {
      var $About_teamVAR = this;
      $About_teamVAR.slick({
        infinite: true
      });
    };
    $.fn.Related_Products = function() {
      var $Related_ProductsVAR = this;
      $Related_ProductsVAR.slick({
        infinite: true
      });
    };
    $.fn.Custom_Collection = function() {
      var $Custom_CollectionVAR = this;
      $Custom_CollectionVAR.slick({
        infinite: true
      });
    };
    $.fn.Collection_Banner = function() {
      var $Collection_BannerVAR = this;
      $Collection_BannerVAR.slick({
        infinite: true
      });
    };
    /*==============All Owl Slider ==================*/
    $.fn.heroOwlSlider = function(){

      // Variable
      var $carousel = $('[data-owl-carousel]');      
      var $heroSlider = $('.slider-active');
      var $slider_boxed_active = $('.slider-active-boxed');
      var $slider_special_active = $('.slider-active-special');
      var $about_testimonial = $('.testimonial-active-test');
      
      
      // Owl Carousel Options
      if ($carousel.length) {
        $carousel.each(function() {
          $(this).owlCarousel($(this).data('owl-carousel'));
        });
      }

      //Hero Fluid Slider Activation
      $heroSlider.owlCarousel();
      $slider_boxed_active.owlCarousel();
      $slider_special_active.owlCarousel();
      $about_testimonial.owlCarousel();

    };

    


    
    
    
    
    

    
    

    /*===============------ product-slider-active 2 -------*/
    var $slider = $('.product-slider-active-2');
    if($slider.length > 0){
      $slider.owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 3,
        margin: 30,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      });
    }

    /*====== Search active ======*/
    function sidebarSearch() {
      var searchTrigger = $('a.search-active'),
          endTriggersearch = $('button.search-close'),
          container = $('.main-search-active');
      searchTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('inside');
      });
      endTriggersearch.on('click', function() {
        container.removeClass('inside');
      });
    };
    sidebarSearch();
    

    /*------- Quickview slide active ---*/

      
      var $quickview_slider = $('.quickview-slide-active');
      if($quickview_slider.length > 0){
      $quickview_slider.owlCarousel({
      
      loop: true,
      navText: ["<i class='sli sli-arrow-left'></i>", "<i class='sli sli-arrow-right'></i>"],
      margin: 15,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 3,
          autoplay: true,
          smartSpeed: 300
        },
        576: {
          items: 3
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
    }

    $('.quickview-slide-active a').on('click', function() {
      $('.quickview-slide-active a').removeClass('active');
    })


    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() === "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });


    // Instagram feed carousel active
    $(window).on('load', function() {
      /*=========================
		Toggle Ativation
	===========================*/
      function itemToggler() {
        $(".toggle-item-active").slice(0, 4).show();
        $(".item-wrapper").find(".loadMore").on('click', function(e) {
          e.preventDefault();
          $(this).parents(".item-wrapper").find(".toggle-item-active:hidden").slice(0, 4).slideDown();
          if ($(".toggle-item-active:hidden").length == 0) {
            $(this).parent('.toggle-btn').fadeOut('slow');
          }
        });
      }
      itemToggler();

      /*-----------------------------------
        Scroll zoom
    -------------------------------------- */
      var $scroll_zoom_var = $('.scroll-zoom');
      if($scroll_zoom_var.length > 0){
        window.sr = ScrollReveal({
          duration: 800,
          reset: false
        });
        sr.reveal('.scroll-zoom');
      }



      /*--------------------------
        ScrollUp
    ---------------------------- */
      $.scrollUp({
        scrollText: '<i class="sli sli-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
      });

      /*====== mobile off canvas active ======*/
      function headermobileAside() {
        var navbarTrigger = $('.mobile-aside-button'),
            endTrigger = $('.mobile-aside-close'),
            container = $('.mobile-off-canvas-active'),
            wrapper = $('.wrapper');
        wrapper.prepend('<div class="body-overlay"></div>');
        navbarTrigger.on('click', function(e) {
          e.preventDefault();
          container.addClass('inside');
          wrapper.addClass('overlay-active');
        });
        endTrigger.on('click', function() {
          container.removeClass('inside');
          wrapper.removeClass('overlay-active');
        });
        $('.body-overlay').on('click', function() {
          container.removeClass('inside');
          wrapper.removeClass('overlay-active');
        });
      };
      headermobileAside();


      /*--- language currency active ----*/
      $('.mobile-language-active').on('click', function(e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
      });
      $('.mobile-currency-active').on('click', function(e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
      });
      $('.mobile-account-active').on('click', function(e) {
        e.preventDefault();
        $('.account-dropdown-active').slideToggle(900);
      });


      /*---------------------
        mobile-menu
    --------------------- */
      var $offCanvasNav = $('.mobile-menu'),
          $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
      /*Add Toggle Button With Off Canvas Sub Menu*/
      $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
      /*Close Off Canvas Sub Menu*/
      $offCanvasNavSubMenu.slideUp();
      /*Category Sub Menu Toggle*/
      $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
          e.preventDefault();
          if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active');
            $this.siblings('ul').slideUp();
          } else {
            $this.parent('li').addClass('active');
            $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.siblings('ul').slideDown();
          }
        }
      });


      /*---------------------
        Price slider
    --------------------- */
      var sliderrange = $('#slider-range');
      var amountprice = $('#amount');
      $(function() {
        sliderrange.slider({
          range: true,
          min: 16,
          max: 400,
          values: [0, 300],
          slide: function(event, ui) {
            amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
          }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
                        " - $" + sliderrange.slider("values", 1));
      });

      /*-----------------------
        Product details slider
    --------------------------- */
      var $product_ds = $('.product-dec-slider');
      if($product_ds.length > 0){
        $product_ds.slick({
        
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="sli sli-arrow-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="sli sli-arrow-right"></i></span>',
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
                     {
                       breakpoint: 768,
                       settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1
                       }
                     },
                     {
                       breakpoint: 767,
                       settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1
                       }
                     },
                     {
                       breakpoint: 575,
                       settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                       }
                     }
                    ]
      });
    }

      
    /*-----------------------
        Product details slider
    --------------------------- */
      var $product_ds_2 = $('.product-dec-slider-2');
      if($product_ds_2.length > 0){
        $product_ds_2.slick({
        
        infinite: true,
        slidesToShow: 4,
        vertical: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="sli sli-arrow-up"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="sli sli-arrow-down"></i></span>',
        responsive: [{
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
                     {
                       breakpoint: 1199,
                       settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1
                       }
                     },
                     {
                       breakpoint: 991,
                       settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1
                       }
                     },
                     {
                       breakpoint: 767,
                       settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1
                       }
                     },
                     {
                       breakpoint: 575,
                       settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1
                       }
                     }
                    ]
      });
    }
      
      
      
      
      var $click_menu = $('#menu');
      if($click_menu.length > 0){

      /*--- Clickable menu active ----*/
      const slinky = $('#menu').slinky()

      /*====== sidebarCart ======*/
      function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
          e.preventDefault();
          container.addClass('inside');
        });
        endTrigger.on('click', function() {
          container.removeClass('inside');
        });
      };
      sidebarMainmenu();
      }


      var $slider = $('.product-slider-active-2');
      if($slider.length > 0){
        $slider.owlCarousel({
          loop: true,
          nav: false,
          autoplay: false,
          autoplayTimeout: 5000,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          item: 3,
          margin: 30,
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            },
            1200: {
              items: 3
            }
          }
        });
      }
      
      
      var $Center_Mode_Slider = $('.slider-active-cmode');
      if($Center_Mode_Slider.length > 0){
        $Center_Mode_Slider.slick({
      
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '260px',

        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="sli sli-arrow-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="sli sli-arrow-right"></i></span>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              centerPadding: '100px',
            }
          },{
            breakpoint: 762,
            settings: {
              slidesToShow: 1,
              centerPadding: '60px',
            }
          },{
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            }
          }
        ]
      });
      }
      
      
      
      
      // Categories Item Show Hide

      $(".category-item-parent.hidden").hide();
      $(".more-btn").on('click', function(e) {
        e.preventDefault();
        $(".category-item-parent.hidden").toggle(500);
        var htmlAfter = "Hide More Type";
        var htmlBefore = "Show More Type";

        $(this).html($(this).text() == htmlAfter ? htmlBefore : htmlAfter);
        $(this).toggleClass("minus");
      });
      
      
      
      
      
      

      /*--------------------------
        Video popup
	---------------------------- */
      var $mag_video_pop = $('.video-popup');
      if($mag_video_pop.length > 0){
        $mag_video_pop.magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          zoom: {
            enabled: true,
          }
        });
      }

    /*--
    Image Popup
    ------------------------*/
      var $mag_img_pop = $('.img-popup');
      if($mag_img_pop.length > 0){
        $mag_img_pop.magnificPopup({
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      }
      
      /*---------------------
        Sidebar sticky active
    --------------------- */
      var $sidebar_active_var = $('.sidebar-active');
      if($sidebar_active_var.length > 0){
        $sidebar_active_var.stickySidebar({
          topSpacing: 80,
          bottomSpacing: 30,
          minWidth: 767,
        });
      }

      /*--- checkout toggle function ----*/
      $('.checkout-click1').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
      });


      /*--- checkout toggle function ----*/
      $('.checkout-click3').on('click', function(e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
      });

      /*-------------------------
    Create an account toggle
    --------------------------*/
      $('.checkout-toggle2').on('click', function() {
        $('.open-toggle2').slideToggle(1000);
      });

      $('.checkout-toggle').on('click', function() {
        $('.open-toggle').slideToggle(1000);
      });

      /*----------------------------------
    checkout one click toggle function
    ------------------------------------*/
      var checked = $('.sin-payment input:checked')
      if (checked) {
        $(checked).siblings('.payment-box').slideDown(900);
      };
      $('.sin-payment input').on('change', function() {
        $('.payment-box').slideUp(900);
        $(this).siblings('.payment-box').slideToggle(900);
      });

      // Remove href
      $('.remove_href').removeAttr('href');
      
      var $ht_product_slider = $('.ht-product-image-slider');
      if($ht_product_slider.length > 0){
        $ht_product_slider.slick({

          dots: true,
          arrows: true,
          prevArrow: '<button class="slick-prev"><i class="sli sli-arrow-left"></i></button>',
          nextArrow: '<button class="slick-next"><i class="sli sli-arrow-right"></i></button>'
        });
      }


      $('.color-categories li .variant_img').on('click', function(){
        var variantImage = jQuery(this).parent().find('.variant_img a img').attr('src');
        jQuery(this).parents('.pgrid_9').find('.ht-product-image .pgrid_9_img a img').attr({ src: variantImage });
        return false;
      });

      $('.p_select a').addClass('active');

      $('.color-categories li .variant_img a').on('click', function(){
        $('.color-categories li .variant_img a.active').removeClass('active');
        $(this).addClass('active');
      });



    });
    
    
    
    
    
    // Product grid color variant activation code. 
    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper-class').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });

    
    
    
    
   //===== Sticky Add To Cart
  function proStikcyAddToCart(){
    var $stikcyParent = $('.pro_sticky_atc'),
        $proVarintActive = $stikcyParent.find('.Pro_variant__active'),
        $stickyProVarItem = $stikcyParent.find('.pro_variant_swatch');

    if($stikcyParent.length) {
      $stickyProVarItem.off('click.activeVar').on('click.activeVar', function(e) {
        var $this = $(this),
            $text = $this.text(),
            $StickyVarval = $this.data('value'),
            $varnewImg = $this.data('img'),
            $newqty = $this.data('quantity');
        $stickyProVarItem.removeClass('active');
        $this.addClass('active');

        $stikcyParent.find('.sticky__pro_add_cart input[type=hidden]').val($StickyVarval);
        $proVarintActive.attr('data-value', $StickyVarval).text($text);

        var $variantSwtval = $('#AddToCartForm [data-value-sticky="'+$StickyVarval+'"]');

        $variantSwtval.each(function() {
          var $switem = $(this).data('value');

          $('[data-value="'+$switem+'"]').closest('.swatch').find('#'+$switem+'').click();
        });

        $('.sticky_pro_img img').attr({ src: $varnewImg });
        $('.sticky__qty input').attr({ totalqty: $newqty });

        return false;
      });

      // Select Option
      var $optionSelected = $('#product-selectors option:selected'),
          $StickyVarval = $optionSelected.val(),
          $prostickyActive = $stikcyParent.find('.pro_variant_swatch[data-value="'+$StickyVarval+'"]'),
          $prostickyText = $prostickyActive.html();

      $proVarintActive.html($prostickyText);
      $prostickyActive.addClass('active');

      var $datastr = $prostickyActive.data('img');
      $('.sticky_pro_img img').attr({ src: $datastr });

      $(".swatch .swatch-element").each(function(e) {
        var $varid = $(this).find('input:radio').attr('id');

        $('.swatch input.text[data-value="'+$varid+'"]').appendTo($(this));
      });
      $('.selector-wrapper').change(function() {
        var $proSelectors = $("#product-selectors").val();
        $('.pro_sticky_atc .pro_variant__options li').each(function(e) {
          var $varSinItem = $(this).find('a').data('value');
          if($varSinItem == $proSelectors){
            $(this).find('a').addClass('active')
          } else{
            $(this).find('a').removeClass('active')
          }
        });
        $("#product-selectors").change(function() {
          var $varstr = "";
          $("#product-selectors option:selected").each(function() {
            $varstr += $(this).data('imge');
          });

          $('.sticky_pro_img img').attr({ src: $varstr });
        }).trigger("change");

        if($stickyProVarItem.hasClass('active')) {
          var $StikcyVarhtml = $('.pro_sticky_atc .pro_variant_swatch.active').html();

          $('.pro_sticky_atc .sticky__pro_add_cart input[type=hidden]').val($proSelectors);
          $proVarintActive.html($StikcyVarhtml);
          $proVarintActive.attr('data-value', $proSelectors);
        };
      });

      //Proudct Scoll Sticky Class
      var offSetTop = $('.sticky__pro_button').offset().top;
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > offSetTop) {
          $('body').addClass('atc_sticky_scoll');
        }
        else {
          $('body').removeClass('atc_sticky_scoll');
        }
      });
    };
    
    // Sticky quanity Count
    $('.quantity_inner').find('.dec_btn, .inc_btn').click(function(e) {
      var $qty_field = $(this).parent().find('input'),
          $qtCount = parseInt($qty_field.val(), 10) + parseInt(e.currentTarget.className === 'inc_btn' ? 1 : -1, 10);
      $qty_field.val($qtCount).change();
    });
    $('.quantity_inner').find("input").change(function() {
      var $this = $(this),
          $min = 1,
          $value = parseInt($this.val(), 10),
          $max = parseInt($this.attr('totalqty'), 10);
      $value = Math.min($value, $max);
      $value = Math.max($value, $min);
      $this.val($value);
    }).on("keypress", function( e ) {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
  } 
  proStikcyAddToCart();
  
   
  
    
    // LookBook JS
    function lookbookkjs(){
      var clothTag = $('.cloth-tag');
      clothTag.each(function(){
        var $this = $(this),
            topValue = $this.data('top'),
            leftValue = $this.data('left');
        $this.css({"top": topValue, "left": leftValue});

      });

      $('.cloth-tag__icon').on('click', function(e) {
        $(this).siblings('.cloth-tag__content').addClass('active');
        e.stopPropagation();
      });

      $('.lookbook_close__icon').on('click', function(e){
        $(this).parent('.cloth-tag__content').removeClass('active');
        e.stopPropagation();
      });

      $('body').on('click', function(e) {
        if (!$(e.target).is('.cloth-tag__content.active'))
          $('.cloth-tag__content.active').removeClass('active');
      });


    };
    lookbookkjs();


    
    
    
    /*
    //add class last hover item
    $('.ht-product').on('mouseenter', function () {
      $(this).addClass('active').parent().siblings().find('.ht-product').removeClass('active');
    });
    */
    
    
    
    
    
    
  });

})(jQuery);