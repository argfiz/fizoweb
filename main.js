
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');

    // Toggle body overflow when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


//Carrusel
/*document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".gallery-item");
  const totalItems = items.length;
  let currentIndex = 2;

  function updateGallery() {
      items.forEach((item, index) => {
          item.classList.remove("gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5");
          let newIndex = (index - currentIndex + totalItems) % totalItems;
          item.classList.add(`gallery-item-${newIndex + 1}`);
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateGallery();
  }

function prevSlide() {
currentIndex = (currentIndex - 1 + totalItems) % totalItems;
updateGallery();
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

});*/