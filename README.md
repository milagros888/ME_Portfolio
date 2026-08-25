# 💼 Portfolio Profesional IT - Milagros Escarlon

¡Bienvenido al repositorio de mi portfolio personal y profesional! Construido con **HTML5 semántico, CSS3 moderno y JavaScript modular**, diseñado con un enfoque en **arquitectura limpia, mantenibilidad y rendimiento óptimo** para mi perfil en **QA Automation, Análisis de Datos y Desarrollo Web**.

🔗 **Demo en vivo (GitHub Pages):** [https://milagros888.github.io/ME_Portfolio/](https://milagros888.github.io/ME_Portfolio/)

---

## 🏛️ Arquitectura del Proyecto (Clean Code & DRY)

El proyecto implementa una **separación clara entre la capa de datos y la capa de presentación**:

```
ME_Portfolio/
├── assets/
│   ├── docs/         # Archivos de CV y documentos (PDF)
│   └── img/          # Imágenes de perfil, proyectos y mockups
├── css/
│   └── style.css     # Sistema de diseño optimizado (Variables CSS y diseño responsive)
├── js/
│   ├── data.js       # Capa de datos centralizada (Proyectos, Skills, Educación)
│   └── script.js     # Lógica, renderizado dinámico, Dark Mode y navegación
├── index.html        # Estructura semántica limpia (< 300 líneas)
└── README.md         # Documentación del proyecto
```

* **Mantenibilidad total:** No es necesario modificar etiquetas HTML complejas para cambiar proyectos o habilidades; todo se gestiona desde el archivo `js/data.js`.
* **Cero dependencias pesadas:** Carga instantánea, sin paquetes que caduquen y 100% compatible con GitHub Pages.

---

## ✨ Características Principales

* 🌐 **Soporte Bilingüe Completo (Español & English):** Botón selector de idioma interactivo que traduce instantáneamente todo el portfolio (Hero, About, Skills, Proyectos, Educación, Contacto y Formularios) con persistencia en el navegador.
* 🌓 **Modo Claro / Oscuro (Light & Dark Mode):** Selector de tema interactivo con persistencia automática en `localStorage` y detección de preferencia del sistema.
* 📱 **Diseño 100% Responsivo:** Adaptado a pantallas móviles, tablets y monitores de escritorio.
* 🧪 **Secciones Especializadas:**
  * **Hero:** Presentación profesional con badges dinámicos de *QA Automation* y *Data Analytics*, descarga directa de CV y redes.
  * **Sobre Mí:** Formación técnica, enfoque profesional y datos clave.
  * **Habilidades:** Categorías organizadas (*QA & Testing*, *Data Analysis*, *Desarrollo Web*, *Soporte & Métodos*).
  * **Proyectos (4 Muestras Listas):** Tarjetas dinámicas con previsualizaciones interactivas de código y dashboards.
  * **Educación y Certificaciones:** Trayectoria académica (UTN, EducacionIT, XAcademy, Mediapila, Daxus Latam, E.E.S.T. N°8).
  * **Contacto:** Canales directos y formulario funcional interactivo con mensajes adaptados al idioma.

---

## 🛠️ Stack Tecnológico

* **Frontend:** HTML5 Semántico + JavaScript (ES6+ Modular)
* **Estilos:** CSS3 Nativo (Variables CSS, Flexbox, CSS Grid, Glassmorphism)
* **Iconografía:** Font Awesome 6.5
* **Tipografías:** Google Fonts (*Plus Jakarta Sans* & *Inter*)

---

## 📝 Cómo Personalizar tus Datos y Proyectos

Para actualizar cualquier información, simplemente abre el archivo [js/data.js](file:///c:/Users/milagr/Documents/GitHub/ME_Portfolio/js/data.js):

1. **Editar Proyectos:** Ve a la sección `projects: [...]` y modifica el título, descripción, tecnologías o enlaces a GitHub.
2. **Agregar Habilidades:** Ve a la sección `skills: [...]` y añade o edita tecnologías en la categoría correspondiente.
3. **Foto de Perfil:** Coloca tu foto en la carpeta `assets/img/` (por ejemplo `assets/img/perfil.jpg`) y en `index.html` reemplaza el bloque `avatar-placeholder` por `<img src="assets/img/perfil.jpg" alt="Milagros Escarlon" class="avatar-img">`.

---

## 🌐 Cómo Publicar en GitHub Pages

1. Sube tus cambios a GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio estructurado con arquitectura modular"
   git push origin main
   ```
2. En GitHub, ve a **Settings** > **Pages**.
3. En **Build and deployment** > **Source**, selecciona `Deploy from a branch`, rama `main` y carpeta `/ (root)`.
4. En 1 minuto tu portfolio estará disponible online.
