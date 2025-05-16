
/***************MENU HAMBURGUER****************/
// Seleccionar elementos del DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle para el menú móvil
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});




/***************************NAVBAR*************************/
// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '5px 30px';
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '15px 30px';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Animación de entrada para elementos al hacer scroll
const observerOptions = {
  threshold: 0.1
};




/*************************PACK ANIMATION***************************/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Seleccionar elementos para animar
const animatedElements = document.querySelectorAll('.card, .mini-card, .text-container, .image-container');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    // Evita que se despliegue si se hace click en un enlace dentro de la card
    if (e.target.tagName === 'A') return;
    card.classList.toggle('open');
  });
});




/*******************GALLERY**********************/


const servicesData = [
  {
    key: "paginas",
    icon: "fas fa-file-alt",
    title: "Páginas",
    desc: "Cada página está diseñada para contener las secciones que sean necesarias, cada página contiene una parte clave de la información del negocio."
  },
  {
    key: "secciones",
    icon: "fas fa-layer-group",
    title: "Secciones",
    desc: "Cada sección cuenta con una altura aproximada adaptada a la pantalla, garantizando una presentación óptima de la información almacenada."
  },
  {
    key: "productos",
    icon: "fas fa-box",
    title: "Productos",
    desc: "Antes del despliegue de la página web, precargaremos la cantidad de productos correspondiente al pack elegido, asegurando que la tienda esté lista para operar"
  },
  {
    key: "seo",
    icon: "fas fa-search",
    title: "SEO",
    desc: "Optimizamos tu sitio web para motores de búsqueda mediante técnicas avanzadas de SEO. Esto mejora su visibilidad en Google y otros buscadores."
  },
  {
    key: "multidispositivos",
    icon: "fas fa-mobile-alt",
    title: "Multidispositivos",
    desc: "Ofrecemos un diseño responsive que garantiza una experiencia óptima en cualquier dispositivo. Se adaptará automáticamente a móviles, tablets y escritorios."
  },
  {
    key: "hosting",
    icon: "fas fa-server",
    title: "Hosting",
    desc: "Ofrecemos instalación y alojamiento web en AWS, garantizando alto rendimiento y estabilidad asegurando un funcionamiento sin interrupciones."
  },
  {
    key: "mantenimiento",
    icon: "fas fa-tools",
    title: "Mantenimiento",
    desc: "Mientras estemos a cargo del Hosting realizamos copias de seguridad para proteger tu sitio ante cualquier problema y evitar pérdida de datos."
  }
];

function renderServiceCards(selectedKey = "paginas") {
  const cardsContainer = document.getElementById("servicesCards");
  cardsContainer.innerHTML = servicesData
    .filter(service => service.key === selectedKey)
    .map(service => `
      <div class="service-mini-card active">
        <div class="title-service-container">
          <i class="${service.icon}"></i>
          <h3>${service.title}</h3>
        </div>
        <p>${service.desc}</p>
      </div>
    `).join("");
}

// Inicializa con la primera pastilla activa
renderServiceCards();

// Lógica de tabs
document.querySelectorAll('.service-pill').forEach(pill => {
  pill.addEventListener('click', function () {
    document.querySelectorAll('.service-pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    renderServiceCards(this.dataset.service);
  });
});

