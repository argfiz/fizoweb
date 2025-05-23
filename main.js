/*****************************************************************************************************/
/* ========================================== PRODUCT GALLERY ====================================== */
/*****************************************************************************************************/
const productData = [
  {
    title: "SEO",
    paragraphs: [
      "El SEO (Optimización para Motores de Búsqueda) es clave para destacar tu página en búsquedas, utilizando palabras clave relevantes, contenido valioso y una estructura optimizada.",
      "¡El SEO impulsa tu éxito online!"
    ],
    image: "./assets/lupa.png",
    imageAlt: "Imagen del producto",
    imageFirst: false
  },
  {
    title: "LIGERO",
    paragraphs: [
      "Creamos páginas rápidas, funcionales y optimizadas al evitar elementos innecesarios como frameworks superfluos. Esto asegura tiempos de carga rápidos, una experiencia de usuario superior y fácil mantenimiento",
      "¡Menos es más!"
    ],
    image: "./assets/pluma.jpeg",
    imageAlt: "Imagen del producto",
    imageFirst: true
  },
  {
    title: "EFICIENTE",
    paragraphs: [
      "Nuestro código, limpio y modular, asegura rendimiento, estabilidad y escalabilidad. Aplicamos estándares actuales y optimizamos recursos, logrando velocidad y facilidad de mantenimiento",
      "¡Eficiencia y calidad que marcan la diferencia!"
    ],
    image: "./assets/tuerca.jpeg",
    imageAlt: "Imagen del producto",
    imageFirst: false
  },
  {
    title: "CALIDAD",
    paragraphs: [
      "Optimizamos constantemente el código y los recursos, mejorando así la velocidad, y la eficiencia. Esto asegura una experiencia fluida para los usuarios al interactuar  ",
      "Rapido, estable, capacidad de respuesta y compatibilidad."
    ],
    image: "./assets/tuerca-barras.jpeg",
    imageAlt: "Imagen del producto",
    imageFirst: true
  }
];

function renderProductDetails() {
  const container = document.querySelector('#product .main-container');
  if (!container) return;
  container.innerHTML = productData.map(item => `
    <div class="product-detail-row">
      ${item.imageFirst ? `
        <div class="image-container">
          <img src="${item.image}" alt="${item.imageAlt}">
        </div>
        <div class="text-container">
          <h2>${item.title}</h2>
          <p>${item.paragraphs[0]}</p>
          <p>${item.paragraphs[1]}</p>
        </div>
      ` : `
        <div class="text-container">
          <h2>${item.title}</h2>
          <p>${item.paragraphs[0]}</p>
          <p>${item.paragraphs[1]}</p>
        </div>
        <div class="image-container">
          <img src="${item.image}" alt="${item.imageAlt}">
        </div>
      `}
    </div>
  `).join('');
}
document.addEventListener('DOMContentLoaded', function() {
  renderProductDetails();
});

/*****************************************************************************************************/
/* ========================================== MENU HAMBURGUER ====================================== */
/*****************************************************************************************************/
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

/*****************************************************************************************************/
/* ============================================ NAVBAR ============================================= */
/*****************************************************************************************************/
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '5px 25px';
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '15px 25px';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Animación de entrada para elementos al hacer scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll('.card, .mini-card, .text-container, .image-container');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') return;
    card.classList.toggle('open');
  });
});

/*****************************************************************************************************/
/* ======================================== GALLERY SERVICES ======================================= */
/*****************************************************************************************************/
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
    desc: "Ofrecemos instalación y alojamiento web en AWS, garantizando alto rendimiento y estabilidad asegurando su funcionamiento."
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
renderServiceCards();

document.querySelectorAll('.service-pill').forEach(pill => {
  pill.addEventListener('click', function () {
    document.querySelectorAll('.service-pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    renderServiceCards(this.dataset.service);
  });
});




/*****************************************************************************************************/
/* ======================================== SLIDER RESPONSIVO CON DOTS ============================= */
/*****************************************************************************************************/
const sliderCardsData = [
  { 
    nombre: "Pack S",
    subtitulo: "Para emprendedores",
    precio: "$150.000 ARS",
    precioNota: "Precio Final",
    items: [
      "1 Página",
      "3 Secciones",
      "10 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  },
  {
    nombre: "Pack M",
    subtitulo: "Para los indecisos",
    precio: "$250.0000 ARS",
    precioNota: "Precio Final",
    items: [
      "3 Página",
      "9 Secciones",
      "25 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  },
  {
    nombre: "Pack G",
    subtitulo: "Para tu negocio",
    precio: "$350.000 ARS",
    precioNota: "Precio Final",
    items: [
      "5 Página",
      "15 Secciones",
      "50 Productos",
      "Multidispositivos",
      "Flotante de WhatsApp",
      "Enlaces a redes sociales",
      "Formulario de contacto",
      "Instalación en servidor",
      "Hosting, año de regalo."
    ]
  }
];

const cardsData = sliderCardsData;

const track = document.getElementById('sliderGalleryTrack');
const dotsContainer = document.getElementById('sliderGalleryDots');
let current = 0;

function renderCards() {
  track.innerHTML = cardsData.map(card => {
    let packClass = '';
    if (card.nombre.includes('Pack S')) packClass = 'pack-s';
    if (card.nombre.includes('Pack M')) packClass = 'pack-m';
    if (card.nombre.includes('Pack G')) packClass = 'pack-g';
    return `
      <article class="card">
        
        <header class="card__header ${packClass}">
          <h2 class="card__title">${card.nombre}</h2>
          <h3 class="card__subtitle">${card.subtitulo}</h3>
        </header>
        <div class="card__body">
          <ul>
            ${card.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <footer class="card__footer ${packClass}">
          <div class="card__actions">
            <p class="card__copy">${card.precio} <br><span>${card.precioNota}</span></p>
          </div>
        </footer>
      </article>
    `;
  }).join('');
}

function renderDots() {
  dotsContainer.innerHTML = cardsData.map((_, idx) =>
    `<button class="slider-gallery-dot${idx === current ? ' active' : ''}" data-idx="${idx}" aria-label="Ir a la carta ${idx + 1}"></button>`
  ).join('');
  dotsContainer.querySelectorAll('button').forEach(btn => {
    btn.onclick = () => {
      current = Number(btn.dataset.idx);
      updateSlider();
    };
  });
}

function updateSlider() {
  const cardWidth = track.children[0].offsetWidth;
  const visibleWidth = track.parentElement.offsetWidth;
  const totalCards = cardsData.length;
  const totalWidth = cardWidth * totalCards;
  let translateX = -current * cardWidth;

  // Si es la última carta y el track es más ancho que el contenedor, ajusta para pegarla a la derecha
  if (current === totalCards - 1 && totalWidth > visibleWidth) {
    translateX = visibleWidth - totalWidth;
  }

  // Evita desplazar más allá del inicio
  if (translateX > 0) translateX = 0;

  track.style.transform = `translateX(${translateX}px)`;
  renderDots();
}

function nextCard() {
  current = (current + 1) % cardsData.length;
  updateSlider();
}
function prevCard() {
  current = (current - 1 + cardsData.length) % cardsData.length;
  updateSlider();
}

// Inicialización
renderCards();
renderDots();
updateSlider();

window.addEventListener('resize', updateSlider);

// Implementación del arrastre
let startX = 0;
let isDragging = false;

track.addEventListener('pointerdown', (e) => {
  isDragging = true;
  startX = e.clientX;
  track.style.cursor = 'grabbing';
});

track.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  track.style.transform = `translateX(${-current * track.children[0].offsetWidth + dx}px)`;
});

track.addEventListener('pointerup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  track.style.cursor = '';
  const dx = e.clientX - startX;
  const threshold = track.children[0].offsetWidth / 4;
  if (dx > threshold) {
    prevCard();
  } else if (dx < -threshold) {
    nextCard();
  } else {
    updateSlider();
  }
});

track.addEventListener('pointerleave', () => {
  if (isDragging) {
    isDragging = false;
    track.style.cursor = '';
    updateSlider();
  }
});