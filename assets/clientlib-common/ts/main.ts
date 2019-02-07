let $: any;
let i: any;

$(document).ready(function () {
  //menu
  $('#btn-menu').click(function () {
    $('header').toggleClass('style-mobile');
  });

  $(window).scroll(function () {
    if (window.scrollY > 0) {
      $('header').addClass('style-scrolled');
    }
    else {
      $('header').removeClass('style-scrolled');
    }
  });

  // scrollify
  if ($(window).width() >= 992) {
    $.scrollify({
      section: ".scroller",
      interstitialSection: "footer",
      easing: "easeOutExpo",
      scrollSpeed: 800,
      offset: 0,
      scrollbars: false,
      setHeights: true,
      standardScrollElements: "",
    });
  }

  // Carrossel 
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    center: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },

      800: {
        items: 4
      },

      1000: {
        items: 5
      }
    }
  });

  $('#milestones .nav-item').on('shown.bs.tab', function () {
    let li = this;
    let itemClicado = false;
    
    $('#milestones .nav-item').each(function () {
      
      if (li === this) {
        itemClicado = true;
      }
      if (itemClicado) {
        $('#milestones .nav-item .nav-link').removeClass('active-way');
        $('#milestones .nav-item').removeClass('active-before active-after');
      }
    });

    $('#milestones .nav-item').each(function () {
      
      $(this).children().addClass('active-way');
      
      if ($(this).children().hasClass('active')) {
        $(this).addClass('active-before');
        return false;
      }
      $(this).addClass('active-before active-after');

    });
  });
});
