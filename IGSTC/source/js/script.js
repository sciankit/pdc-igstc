(function ($) {
  'use strict';
    
  // navbarDropdown
  if ($(window).width() < 992) {
    $('.main-nav [data-toggle="dropdown"]').on('click', function () {
      $(this).siblings('.dropdown-menu').animate({
        height: 'toggle'
      }, 300);
    });
  }

  // -----------------------------
  // To Top Init
  // -----------------------------
  $('.to-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function () {

    // -----------------------------
    //  Screenshot Slider
    // -----------------------------
    $('.div-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    // -----------------------------
    //  Count Down JS
    // -----------------------------
    $('.timer').syotimer({
      year: 2023,
      month: 3,
      day: 8,
      hour: 9,
      minute: 1
    });

    // -----------------------------
    // Magnific Popup
    // -----------------------------
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 160, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          // just a hack that adds mfp-anim class to markup
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: true,
      fixedContentPos: false,
      fixedBgPos: true

    });
    
    // gallery-wrapper init
    if (($('.gallery-wrapper').length) !== 0) {
      var Shuffle = window.Shuffle;
      var jQuery = window.jQuery;

      var myShuffle = new Shuffle(document.querySelector('.gallery-wrapper'), {
        itemSelector: '.gallery-item',
        buffer: 1
      });

      jQuery('input[name="gallery-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
    }
  });

})(jQuery);