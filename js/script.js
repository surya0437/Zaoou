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
  slidesPerView: 1, // Default to 1 slide visible
  spaceBetween: 20, // Spacing between slides
  breakpoints: {
    640: { slidesPerView: 1 },  // 1 slide for screens 640px and below
    768: { slidesPerView: 2 },  // 2 slides for screens 768px and above
    1024: { slidesPerView: 3 }, // 3 slides for screens 1024px and above
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


