/*--- Write Javascript Here ---*/
$(document).ready(function () {
  // auto click load more function
  $(document.body).on('touchmove', pagingScroll); // for mobile
  $(window).on('scroll', pagingScroll);
});

function pagingScroll() {
  if (
    $(window).scrollTop() + $(window).height() >
    $('#loadmore').offset().top + 200
  ) {
    var lm = $('#loadmore').attr('href');
    var nl = lm.split('/').pop();
    console.log(nl);
    if (nl < 3) {
      $('#loadmore').click();
    }
  }
}

new WOW().init();

// Hamburger Mobile Menu
var $hamburger = $('#btn-nav-header');
$hamburger.on('click', function (e) {
  $hamburger.toggleClass('is-active');
  $('#nav-header-mobile').toggleClass('active');
  $('.overlay-menu-mobile').toggleClass('active');
});

var $hamburger = $('#btn-nav-header-mobile');
$hamburger.on('click', function (e) {
  $hamburger.toggleClass('is-active');
  $('#nav-header-mobile').toggleClass('active');
  $('.overlay-menu-mobile').toggleClass('active');
});

var $clearMenuM = $('.overlay-menu-mobile');
$clearMenuM.on('click', function (e) {
  $hamburger.toggleClass('is-active');
  $('#nav-header-mobile').toggleClass('active');
  $('.overlay-menu-mobile').toggleClass('active');
});

// Dropdown Menu Header
// var $btnDropdownOtonews = $(".btn-dropdown-otonews");
// $btnDropdownOtonews.hover(function(e) {
//   $('#dropdown-menu-ototips').removeClass("active");
//   $('#dropdown-menu-otosport').removeClass("active");
//   $('#dropdown-menu-ototren').removeClass("active");
//   $('#dropdown-menu-otomodif').removeClass("active");
//   $('#dropdown-menu-otobrand').removeClass("active");
//   $('#dropdown-menu-otonews').toggleClass("active");
// });

// var $btnDropdownOtotips = $(".btn-dropdown-ototips");
// $btnDropdownOtotips.hover(function(e) {
//   $('#dropdown-menu-otonews').removeClass("active");
//   $('#dropdown-menu-otosport').removeClass("active");
//   $('#dropdown-menu-ototren').removeClass("active");
//   $('#dropdown-menu-otomodif').removeClass("active");
//   $('#dropdown-menu-otobrand').removeClass("active");
//   $('#dropdown-menu-ototips').toggleClass("active");
// });

// var $btnDropdownOtosport = $(".btn-dropdown-otosport");
// $btnDropdownOtosport.hover(function(e) {
//   $('#dropdown-menu-otonews').removeClass("active");
//   $('#dropdown-menu-ototips').removeClass("active");
//   $('#dropdown-menu-ototren').removeClass("active");
//   $('#dropdown-menu-otomodif').removeClass("active");
//   $('#dropdown-menu-otobrand').removeClass("active");
//   $('#dropdown-menu-otosport').toggleClass("active");
// });

// var $btnDropdownOtotren = $(".btn-dropdown-ototren");
// $btnDropdownOtotren.hover(function(e) {
//   $('#dropdown-menu-otonews').removeClass("active");
//   $('#dropdown-menu-ototips').removeClass("active");
//   $('#dropdown-menu-otosport').removeClass("active");
//   $('#dropdown-menu-otomodif').removeClass("active");
//   $('#dropdown-menu-otobrand').removeClass("active");
//   $('#dropdown-menu-ototren').toggleClass("active");
// });

// var $btnDropdownOtomodif = $(".btn-dropdown-otomodif");
// $btnDropdownOtomodif.hover(function(e) {
//   $('#dropdown-menu-otonews').removeClass("active");
//   $('#dropdown-menu-ototips').removeClass("active");
//   $('#dropdown-menu-otosport').removeClass("active");
//   $('#dropdown-menu-ototren').removeClass("active");
//   $('#dropdown-menu-otobrand').removeClass("active");
//   $('#dropdown-menu-otomodif').toggleClass("active");
// });

// Collapse Menu Footer
var $btnFooterNasional = $('.btn-footer-nasional');
$btnFooterNasional.on('click', function (e) {
  $('#collapseFooterInternasional').removeClass('show');
  $('#collapseFooterOtosport').removeClass('show');
  $('#collapseFooterSport').removeClass('show');
  $('#collapseFooterGaleri').removeClass('show');
});

var $btnFooterInternasional = $('.btn-footer-internasional');
$btnFooterInternasional.on('click', function (e) {
  $('#collapseFooterNasional').removeClass('show');
  $('#collapseFooterOtosport').removeClass('show');
  $('#collapseFooterSport').removeClass('show');
  $('#collapseFooterGaleri').removeClass('show');
});

var $btnFooterOtosport = $('.btn-footer-otosport');
$btnFooterOtosport.on('click', function (e) {
  $('#collapseFooterNasional').removeClass('show');
  $('#collapseFooterInternasional').removeClass('show');
  $('#collapseFooterSport').removeClass('show');
  $('#collapseFooterGaleri').removeClass('show');
});

var $btnFooterSport = $('.btn-footer-sport');
$btnFooterSport.on('click', function (e) {
  $('#collapseFooterNasional').removeClass('show');
  $('#collapseFooterInternasional').removeClass('show');
  $('#collapseFooterOtosport').removeClass('show');
  $('#collapseFooterGaleri').removeClass('show');
});

var $btnDropdownGaleri = $('.btn-footer-galeri');
$btnDropdownGaleri.on('click', function (e) {
  $('#collapseFooterNasional').removeClass('show');
  $('#collapseFooterInternasional').removeClass('show');
  $('#collapseFooterOtosport').removeClass('show');
  $('#collapseFooterSport').removeClass('show');
});

window.onscroll = function () {
  headerScroll();
};

function headerScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header-logo').className = 'd-none active';
    document.getElementById('header-top').className =
      'navbar navbar-expand-lg navbar-light white d-flex active border-bottom';
    document.getElementById('header-top-mobile').className =
      'navbar navbar-expand-lg navbar-light white d-flex d-lg-none border-bottom active';
    document.getElementById('header-menu').className =
      'navbar navbar-expand-lg navbar-light white d-none d-lg-block active border-bottom';
    document.getElementById('btn-header-menu').className =
      'py-2 px-2 d-inline-block bg-transparent border-0 active';
    document.getElementById('logo-header-menu').className =
      'navbar-brand d-inline-flex d-lg-none me-0 active';
  } else {
    document.getElementById('header-logo').className = 'd-none d-lg-block';
    document.getElementById('header-top').className =
      'navbar navbar-expand-lg navbar-light white d-flex border-bottom';
    document.getElementById('header-top-mobile').className =
      'navbar navbar-expand-lg navbar-light white d-lg-none d-flex border-bottom';
    document.getElementById('header-menu').className =
      'navbar navbar-expand-lg navbar-light white d-none border-bottom';
    document.getElementById('btn-header-menu').className =
      'py-2 px-2 d-none bg-transparent border-0';
    document.getElementById('logo-header-menu').className =
      'navbar-brand d-none d-lg-inline-flex me-0';
  }
}

// Carousel
// Carousel Headline
$('.headline-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  // navText: ["<img src='themes/2024/img/arrow-l.png'>","<img src='themes/2024/img/arrow-r.png'>"],
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 1,
      dots: true,
    },
    1000: {
      items: 1,
      dots: true,
    },
  },
});

$('.gallery-photo-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  // navText: ["<img src='themes/2024/img/arrow-r-w.png'>", "<img src='themes/2024/img/arrow-r-w.png'>"],
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 1,
      dots: true,
    },
    1000: {
      items: 1,
      dots: true,
    },
  },
});

$('.brand-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  // navText: ["<img src='themes/2024/img/arrow-l.png'>","<img src='themes/2024/img/arrow-r.png'>"],
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 8,
    },
  },
});

$('.menu-mobile-horizontal').owlCarousel({
  autoplay: false,
  loop: false,
  margin: 10,
  nav: false,
  items: 2,
});
