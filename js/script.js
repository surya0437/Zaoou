const toggleButton = document.getElementById('toggleDrawer');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openDrawer() {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeDrawer() {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

toggleButton.addEventListener('click', () => {
    if (drawer.classList.contains('-translate-x-full')) {
        openDrawer();
    } else {
        closeDrawer();
    }
});

overlay.addEventListener('click', closeDrawer);

// document.addEventListener("DOMContentLoaded", function () {
//     const scrollContainer = document.getElementById("scroll-container");

//     function scrollHorizontally() {
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//             scrollContainer.scrollLeft = 0; // Reset when reaching the end
//         } else {
//             scrollContainer.scrollLeft += 1; // Adjust speed here
//         }
//     }

//     setInterval(scrollHorizontally, 15); // Adjust speed by changing the interval
// });

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scroll-container");
  let scrollInterval;

  function startScrolling() {
    scrollInterval = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0; // Reset to start
      } else {
        scrollContainer.scrollLeft += 1; // Adjust speed
      }
    }, 15); // Speed of scroll
  }

  function stopScrolling() {
    clearInterval(scrollInterval);
  }

  // Start scrolling
  startScrolling();

  // Stop scrolling on hover, resume on mouse leave
  scrollContainer.addEventListener("mouseenter", stopScrolling);
  scrollContainer.addEventListener("mouseleave", startScrolling);
});
