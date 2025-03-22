// import Swiper JS
import Swiper from "swiper";
import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2, // Show 2 slides at a time
  //   centeredSlides: true, // Center the active slide
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
  speed: 1000, // Animation speed
});

document.querySelector(".swiper-button-next").addEventListener("click", () => {
  swiper.slideNext();
});
document.querySelector(".swiper-button-prev").addEventListener("click", () => {
  swiper.slidePrev();
});
