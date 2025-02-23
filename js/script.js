document.addEventListener("DOMContentLoaded", function () {
  // financial partner scroll
  const scrollContainer = document.getElementById("scroll-container");
  let scrollInterval;

  function startScrolling() {
    scrollInterval = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 15);
  }

  function stopScrolling() {
    clearInterval(scrollInterval);
  }

  startScrolling();
  scrollContainer.addEventListener("mouseenter", stopScrolling);
  scrollContainer.addEventListener("mouseleave", startScrolling);
});

//blog swiper

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000, // Change slides every 2 seconds
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3, // Adjust slides visible at once
  spaceBetween: 20, // Spacing between slides
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});


document.querySelectorAll(".group").forEach((group) => {
  const dropdown = group.querySelector(".dropdown");
  group.addEventListener("mouseenter", () => {
    dropdown.classList.add("dropdown-enter-active");
  });
  group.addEventListener("mouseleave", () => {
    dropdown.classList.remove("dropdown-enter-active");
  });
});

const fileInput = document.getElementById("fileInput");
const imagePreview = document.getElementById("imagePreview");
const placeholderIcon = document.getElementById("placeholderIcon");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.src = reader.result;
      imagePreview.classList.remove("hidden");
      placeholderIcon.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  }
});
