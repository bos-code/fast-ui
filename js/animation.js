import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);

// gsap.to("h1", {
//     duration: 1,
//     x: 100,
//     ease: "bounce"
// });

gsap.to(".bgi", {
  duration: 10,
  rotation: "+=360",
  repeat: -1,
  ease: "linear",
});

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2, // Show 2 slides at a time
  centeredSlides: true, // Center the active slide
  spaceBetween: 20, // Adjust spacing between slides
  effect: "coverflow", // Nice 3D effect
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  grabCursor: true, // Makes dragging feel natural
  loop: true, // Infinite scrolling
  speed: 800, // Animation speed
  keyboard: {
    enabled: true, // Enable keyboard control
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
