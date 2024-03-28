$(document).ready(function () {
  //Nice Select
  $(".niceSelect").niceSelect();

  //Instagram Gallery
  $(".instagram_gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //Event Gallery

  $(".event_gallery_slider .event_gallery_item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //Memories Gallery
  $("#memoriesSlider .event_gallery_item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Gallery
  $(".gallery_item a").magnificPopup({
    //Change the className name for each tab
    type: "image",
    gallery: {
      enabled: true,
    },
    callbacks: {
      elementParse: function (item) {
        if (item.el[0].className == "video_popup") {
          (item.type = "iframe"),
            (item.iframe = {
              patterns: {
                youtube: {
                  index: "youtube.com/",

                  id: "v=",

                  src: "//www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
                },
                vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed",
                },
              },
            });
        } else {
          (item.type = "image"),
            (item.tLoading = "Loading image #%curr%..."),
            (item.mainClass = "mfp-img-mobile"),
            (item.image = {
              tError:
                '<a href="%url%">The image #%curr%</a> could not be loaded.',
            });
        }
      },
    },
  });
});

//Add className
function displayItem(addID, addClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${addID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(addClass);
  ovlerlayDiv.style.cssText = "  display: block;";
}
//Remove className
function removeDisplayItem(removeID, removeClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${removeID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(removeClass);
  ovlerlayDiv.style.cssText = "  display: none;";
}

//OutSide Scroll Hidden
function scrollOutsideHidden() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:hidden;";
}
//OutSide Scroll Scroll
function scrollOutsideScroll() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:auto;";
}

//Sticky Navbar
function stickyHeader(stickyTag, stickyClass, scrollHeight = 0) {
  let stickyWrapper = document.querySelector(`#${stickyTag}`);
  stickyWrapper.classList.toggle(stickyClass, scrollY > scrollHeight);
}
let headerWrapper = document.querySelector("#headerWrapper");
if (headerWrapper) {
  window.addEventListener("scroll", () => {
    stickyHeader("headerWrapper", "navbar_fixed");
  });
}

// Mobile Menu
let navbarIcon = document.querySelector("#menuToggleBtn");
let navbarCloseIcon = document.querySelector(".close_icon");
let navbarOverlay = document.querySelector(".mobile_menu_overlay");
let mobileMenuArea = document.querySelector(".mobile_menu_area");
if (navbarIcon) {
  navbarIcon.addEventListener("click", () => {
    mobileMenuArea.classList.add("navbar_active");
    scrollOutsideHidden();
  });
}
if (navbarIcon) {
  navbarCloseIcon.addEventListener("click", () => {
    hideNavbar();
  });
}

if (navbarIcon) {
  navbarOverlay.addEventListener("click", () => {
    hideNavbar();
  });
}

function hideNavbar() {
  mobileMenuArea.classList.remove("navbar_active");
  scrollOutsideScroll();
}

// Form Validation Methods Using Bootstrap 5
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Slider Single
function singleSlider(
  sliderID,
  sliderNextArrow,
  sliderPrevArrow,
  sliderSpeed = 5000
) {
  var swiperHero = new Swiper(`${sliderID} .swiper`, {
    speed: 1100,

    autoplay: {
      delay: sliderSpeed,
      pauseOnMouseEnter: true,
    },
    keyboard: {
      enabled: true,
      // onlyInViewport: true,
    },
    navigation: {
      nextEl: sliderNextArrow,
      prevEl: sliderPrevArrow,
    },
  });
}

//Hero Slider
var swiperHero = new Swiper(".hero_wrapper .swiper", {
  speed: 1200,
  // effect: 'fade',
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".hero_wrapper .swiper-pagination",
    clickable: true,
  },

  on: {
    //Initial first slide video play
    init: function () {
      var activeIndex = this.activeIndex;
      var activeSlide =
        document.getElementsByClassName("swiper-slide")[activeIndex];
      var activeSlideVideo = activeSlide.getElementsByTagName("video")[0];
      if (activeSlideVideo !== undefined) {
        activeSlideVideo.play();
      }
    },
    //After change slider
    transitionStart: function () {
      var videos = document.querySelectorAll(".hero_wrapper .swiper video");

      Array.prototype.forEach.call(videos, function (video) {
        video.pause();
      });
    },
    //After change slider
    transitionEnd: function () {
      var activeIndex = this.activeIndex;
      var activeSlide =
        document.getElementsByClassName("swiper-slide")[activeIndex];
      var activeSlideVideo = activeSlide.getElementsByTagName("video")[0];
      if (activeSlideVideo !== undefined) {
        activeSlideVideo.play();
      }
    },
  },
});

//Event Slider
var swiperEvent = new Swiper(".event_slider_area .swiper", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".event_slider_area .swiper-pagination",
    clickable: true,
  },
});

//Wedding Slider
var swiperWedding = new Swiper(".wedding_wrapper .swiper", {
  speed: 1200,
  navigation: {
    nextEl: ".wedding_wrapper .swiper-button-next",
    prevEl: ".wedding_wrapper .swiper-button-prev",
  },
});

//Wedding Gallery Slider
var swiperWeddingGallery = new Swiper(".event_gallery_slider .swiper", {
  speed: 1100,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 10,

  pagination: {
    el: ".event_gallery_slider .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    },
  },
});

//Memories Slider
var swiperMemories = new Swiper("#memoriesSlider .swiper", {
  speed: 1100,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 10,

  navigation: {
    nextEl: "#memoriesSlider .memories_next_icon",
    prevEl: "#memoriesSlider .memories_prev_icon",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 160,
    },
  },
});

//Meeting Slider
var swiperEvent = new Swiper(".meeting_slider_wrapper .swiper", {
  pagination: {
    el: ".meeting_slider_wrapper .swiper-pagination",
    clickable: true,
  },
});

// ScrollToUp
let scroll = document.querySelector("#scrollTop");
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
if (scroll) {
  window.addEventListener("scroll", function () {
    scroll.classList.toggle("scroll_active", window.scrollY > 500);
  });
  scroll.addEventListener("click", () => {
    scrollUp();
  });
}

// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 120,
    offset: 120,
  });
});
$(window).on("load", function () {
  AOS.refresh();
});
