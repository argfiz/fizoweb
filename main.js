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
    navbar.style.padding = '10px 30px';
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '20px 30px';
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
    subtitulo: "Oportuno para emprendedores",
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
    subtitulo: "Ideal para los indecisos",
    precio: "$250.000 ARS",
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
    subtitulo: "Perfecto para tu negocio",
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

function renderSliderGallery(cardsData) {
  const track = document.getElementById('sliderGalleryTrack');
  const dots = document.getElementById('sliderGalleryDots');
  if (!track || !dots) return;

  const packClass = (nombre) => {
    if (nombre.includes('Pack S')) return 'pack-s';
    if (nombre.includes('Pack M')) return 'pack-m';
    if (nombre.includes('Pack G')) return 'pack-g';
    return '';
  };

  track.innerHTML = cardsData.map((pack, idx) => `
    <article class="card ${packClass(pack.nombre)}" data-idx="${idx}" data-original-idx="${pack.originalIdx ?? idx}">
      <div class="card-header ${packClass(pack.nombre)}">
        <h2>${pack.nombre.replace('Pack ', 'Pack <span>') + '</span>'}</h2>
        <p>${pack.subtitulo}</p>
      </div>
      <div class="card-content">
        <ul>
          ${pack.items.map(item => `<li><p>${item}</p></li>`).join('')}
        </ul>
      </div>
      <div class="card-price-container ${packClass(pack.nombre)}">
        <p class="card-price">${pack.precio}</p>
        <span>${pack.precioNota}</span>
      </div>
    </article>
  `).join('');

  // Los dots SIEMPRE representan el orden original
  dots.innerHTML = sliderCardsData.map((_, idx) =>
    `<button class="slider-gallery-dot" data-dot="${idx}" aria-label="Ir a la carta ${idx + 1}"></button>`
  ).join('');
}

function sliderGalleryInit() {
  function isMobileOrTabletView() {
    return window.matchMedia('(max-width: 500px)').matches;
  }

  function getInitialCardsData() {
    // Siempre mantiene el orden original al iniciar
    return sliderCardsData.map((c, idx) => ({ ...c, originalIdx: idx }));
  }

  let cardsData = getInitialCardsData();
  let current = 0; // Siempre la primera carta es la expuesta (vitrina) en mobile

  function updateSlider() {
    renderSliderGallery(cardsData);
    const track = document.getElementById('sliderGalleryTrack');
    const dots = document.getElementById('sliderGalleryDots');
    const cards = Array.from(track.children);

    if (!cards.length) return;

    // Ajusta current según el tamaño de pantalla
    if (isMobileOrTabletView()) {
      current = 0; // Siempre la carta en vitrina es la primera
    } else if (current !== 1) {
      current = 1; // En desktop, la central
    }

    cards.forEach((card, idx) => {
      card.classList.toggle('active', idx === current);
      if (idx !== current) card.classList.remove('open');
    });

    // --- ANIMACIÓN Y CENTRADO ---
    let moveX = 0;
    if (isMobileOrTabletView()) {
      moveX = 0; // Siempre muestra la primera carta en vitrina
      track.classList.add('changing');
      setTimeout(() => {
        track.classList.remove('changing');
      }, 400);
    } else {
      const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginLeft) + parseInt(getComputedStyle(cards[0]).marginRight);
      const container = track.parentElement;
      const containerWidth = container.offsetWidth;
      const centerOffset = (containerWidth - cardWidth) / 2;
      moveX = centerOffset - (current * cardWidth);
      track.classList.remove('changing');
    }
    track.style.transform = `translateX(${moveX}px)`;

    // Dots
    const activeOriginalIdx = cardsData[current].originalIdx;
    dots.querySelectorAll('.slider-gallery-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeOriginalIdx);
      dot.onclick = () => {
        if (isMobileOrTabletView()) {
          if (idx !== 0) {
            // Lleva la carta seleccionada a la vitrina y la anterior al final
            const selected = cardsData.splice(idx, 1)[0];
            const prevVitrina = cardsData.shift();
            cardsData.unshift(selected);
            cardsData.push(prevVitrina);
            updateSlider();
          }
        } else {
          const newIdx = cardsData.findIndex(c => c.originalIdx === idx);
          if (newIdx !== -1) {
            current = newIdx;
            handleInfiniteCorrimiento();
            updateSlider();
          }
        }
      };
    });

    // Cards click
    cards.forEach((card, idx) => {
      card.onclick = function(e) {
        if (window.matchMedia('(min-width: 901px)').matches) {
          card.classList.toggle('open');
        } else {
          if (idx === current) {
            card.classList.toggle('open');
          } else {
            if (isMobileOrTabletView()) {
              // Lleva la carta seleccionada a la vitrina y la anterior al final
              const selected = cardsData.splice(idx, 1)[0];
              const prevVitrina = cardsData.shift();
              cardsData.unshift(selected);
              cardsData.push(prevVitrina);
              updateSlider();
            } else {
              current = idx;
              handleInfiniteCorrimiento();
              updateSlider();
            }
          }
        }
      };
    });
  }

  function handleInfiniteCorrimiento() {
    if (current === 0) {
      cardsData = [cardsData[2], cardsData[0], cardsData[1]];
      current = 1;
    } else if (current === 2) {
      cardsData = [cardsData[1], cardsData[2], cardsData[0]];
      current = 1;
    }
  }

  window.addEventListener('resize', () => {
    cardsData = getInitialCardsData();
    current = isMobileOrTabletView() ? 0 : 1;
    updateSlider();
  });

  updateSlider();
}

document.addEventListener('DOMContentLoaded', sliderGalleryInit);