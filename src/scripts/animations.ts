// src/scripts/animations.ts

// 1. Reveal on Scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Solo animar una vez (fire once)
    }
  });
}, observerOptions);

// Se inicializa tras cargar el DOM (Astro ejecuta scripts tipo module por defecto después del HTML)
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));


// 2. Cursor personalizado (Solo para pantallas táctiles/Desktop)
if (window.matchMedia('(pointer: fine)').matches && !('ontouchstart' in window)) {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; 
    mouseY = e.clientY;
  });

  const lerp = (start: number, end: number, t: number) => {
    return start + (end - start) * t;
  };

  const animateCursor = () => {
    cursorX = lerp(cursorX, mouseX, 0.12);
    cursorY = lerp(cursorY, mouseY, 0.12);
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
  };
  
  animateCursor();

  // Cursor estático sin expansión en elementos interactivos
}

// 3. Barra de progreso de lectura (Scroll Progress)
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Si la página no tiene scroll (muy corta), winHeightPx es 0
    const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0;
    scrollProgress.style.width = scrolled + '%';
  }, { passive: true });
}
