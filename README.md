# 🚀 MoLoTech — Landing Page Premium

Bienvenido al repositorio de la landing page oficial de **MoLoTech**. Este proyecto ha sido diseñado para proyectar una imagen profesional, moderna y futurista, utilizando las tecnologías más avanzadas del ecosistema web actual.

Este documento explica paso a paso cómo se construyó el sitio, pensado para que cualquier persona (¡incluso si estás empezando!) pueda entender la magia detrás del código.

---

## 🛠️ Stack Tecnológico (Nuestras Herramientas)

Elegimos estas herramientas para garantizar velocidad, SEO y una experiencia de usuario increíble:

* **Astro 4+**: El motor principal. Es increíble porque genera sitios estáticos ultra rápidos (envía 0 JavaScript al navegador por defecto).
* **Tailwind CSS v4**: Para el diseño. Nos permite escribir estilos modernos directamente en el HTML de forma organizada.
* **Motion One**: Para las animaciones fluidas y ligeras.
* **Lucide Icons**: Iconos minimalistas y elegantes en formato SVG.
* **Google Fonts**: Utilizamos *Inter* para el cuerpo de texto y *Space Grotesk* para los títulos llamativos.

---

## 📂 Estructura del Proyecto (¿Dónde está cada cosa?)

```text
molotech-landing/
├── public/                # Archivos estáticos (Imágenes, Fuentes, Favicon)
│   ├── images/            # Logo y recursos visuales
│   └── favicon.ico        # Icono de la pestaña del navegador
├── src/
│   ├── components/        # Piezas de construcción (Header, Botones, Secciones)
│   │   ├── layout/        # Elementos que se repiten (Header, Footer, ScrollToTop)
│   │   └── sections/      # Cada "piso" de la página (Hero, Servicios, Equipo)
│   ├── layouts/           # La "plantilla" maestra que envuelve todas las páginas
│   ├── pages/             # La página principal (index.astro)
│   ├── scripts/           # La inteligencia (Animaciones, Cursor, Scroll)
│   └── styles/            # Los colores y reglas globales (CSS Variables)
├── astro.config.mjs       # Configuración de Astro
└── package.json           # Lista de ingredientes y dependencias
```

---

## 🏗️ Construcción Paso a Paso

### Paso 1: El Esqueleto (BaseLayout)

Lo primero fue crear un **Layout Base**. Piensa en esto como el "marco" de un cuadro. Aquí configuramos todo el SEO (títulos, descripciones para Google) y cargamos las fuentes. Esto asegura que todas las páginas tengan la misma estructura técnica.

### Paso 2: Los Colores y el Estilo (Sistema de Diseño)

En `src/styles/global.css` definimos nuestra paleta de colores usando **Variables CSS**.

* **Fondo:** Negro profundo (`#0A0A0F`) para un look moderno.
* **Acento:** Violeta tecnológico (`#6C63FF`) para botones y detalles.
* **Glassmorphism:** Efectos de desenfoque sutiles en el menú para que se sienta premium.

### Paso 3: La Navegación (Header y Footer)

Creamos un **Header** (menú) que se vuelve traslúcido cuando haces scroll y un **Footer** (pie de página) con toda la información de contacto y redes sociales.

### Paso 4: Las Secciones de Contenido

Construimos la página por bloques (componentes):

1. **Hero:** La primera impresión. Incluye un título potente y un sistema de partículas animadas.
2. **Servicios:** Cards elegantes que muestran qué hace MoLoTech.
3. **Portafolio:** Galería de proyectos con efectos de hover.
4. **Equipo:** Presentación de los expertos detrás de la marca.
5. **Contacto:** Formulario listo para captar clientes.

### Paso 5: Las Animaciones Premium (El toque mágico)

Aquí es donde el sitio cobra vida:

* **Partículas Canvas:** En el fondo del Hero, hay partículas que se mueven y se conectan suavemente.
* **Reveal on Scroll:** Los elementos aparecen con un deslizamiento suave a medida que bajas la página.
* **Cursor Personalizado:** Un círculo elegante que sigue tu mouse (solo en computadores).
* **Scroll to Top:** Un botón redondo que aparece mágicamente para llevarte de vuelta al inicio.

### Paso 6: Identidad Visual (Logo e Icono)

Generamos un archivo `.ico` profesional basado en el logo de la empresa y configuramos todas las etiquetas para que el logo se vea perfecto tanto en el sitio como en la pestaña del navegador.

---

## 🚀 Cómo ejecutarlo en tu computador

Si tienes este código y quieres verlo funcionar:

1. **Instala las dependencias**:

    ```bash
    npm install
    ```

2. **Inicia el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

3. **Abre tu navegador** en: `http://localhost:4321`

---

## ✨ Rendimiento y SEO

Este sitio está optimizado para sacar **100/100 en Lighthouse**:

* ✅ Imágenes en formato moderno (WebP).
* ✅ Carga diferida (Lazy loading) para que lo que no se ve no pese.
* ✅ Meta tags completos para compartir en WhatsApp, LinkedIn y Twitter.
* ✅ Estructura semántica de HTML para que Google nos ame.

---

**MoLoTech** — *Transformando ideas en soluciones digitales asombrosas.*
