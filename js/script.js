document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleDrawer");
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("closeDrawer");
  const scrollContainer = document.getElementById("scroll-container");
  let scrollInterval;



  function startScrolling() {
      scrollInterval = setInterval(() => {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
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

document.querySelectorAll('.group').forEach(group => {
    const dropdown = group.querySelector('.dropdown');
    group.addEventListener('mouseenter', () => {
      dropdown.classList.add('dropdown-enter-active');
    });
    group.addEventListener('mouseleave', () => {
      dropdown.classList.remove('dropdown-enter-active');
    });
  });


  const fileInput = document.getElementById('fileInput');
  const imagePreview = document.getElementById('imagePreview');
  const placeholderIcon = document.getElementById('placeholderIcon');

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        imagePreview.src = reader.result;
        imagePreview.classList.remove('hidden');
        placeholderIcon.classList.add('hidden');
      };
      reader.readAsDataURL(file);
    }
  });