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

const form = document.getElementById("contactForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, message, span) {
  input.classList.remove("border-[#2B2B2B]", "border-green-500");
  input.classList.add("border-red-500");
  span.textContent = message;
  span.classList.remove("hidden", "text-green-500");
  span.classList.add("text-red-500");
}

function setSuccess(input, span) {
  input.classList.remove("border-[#2B2B2B]", "border-red-500");
  input.classList.add("border-green-500");
  span.textContent = "Looks good!";
  span.classList.remove("hidden", "text-red-500");
  span.classList.add("text-green-500");

  setTimeout(() => {
    input.classList.remove("border-green-500");
    input.classList.add("border-[#2B2B2B]");
    span.classList.add("hidden");
  }, 2000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = fullNameInput.value.trim();
  const email = emailInput.value.trim();

  let valid = true;

  if (!nameRegex.test(name)) {
    setError(
      fullNameInput,
      "Please enter a valid full name (e.g., John Doe)",
      nameError
    );
    valid = false;
  } else {
    setSuccess(fullNameInput, nameError);
  }

  if (!emailRegex.test(email)) {
    setError(emailInput, "Please enter a valid email address", emailError);
    valid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  if (valid) {
    // form is valid, you can submit or process it here
    console.log("Form is valid!");
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  mobileMenu.classList.toggle("translate-x-full");
});

closeMenu.addEventListener("click", () => {
  console.log("man");
  mobileMenu.classList.toggle("translate-x-full");
  hamburger.classList.toggle("hidden");
});

