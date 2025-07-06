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


const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const accordion = header.parentElement;
    const icon = header.querySelector(".accordion-icon");

    // Close all other accordions
    document.querySelectorAll(".accordion").forEach((acc) => {
      if (acc !== accordion) {
        acc.classList.remove("active");
        acc.querySelector(".accordion-icon").textContent = "+";
      }
    });

    // Toggle current accordion
    const isActive = accordion.classList.contains("active");
    accordion.classList.toggle("active");
    icon.textContent = isActive ? "+" : "–";
  });
});

const heading = document.getElementById("faq-heading");
const words = heading.textContent.trim().split(" ");
heading.innerHTML = words
  .map((word) => `<span class="block">${word}</span>`)
  .join("");
