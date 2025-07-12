## Estructura de Archivos
jose-plascencia-salon/
├── index.html                  # Página principal
├── assets/
│   ├── css/
│   │   ├── main.css            # Estilos principales
│   │   ├── variables.css       # Variables de diseño (colores, fuentes)
│   │   └── responsive.css      # Media queries para responsividad
│   ├── js/
│   │   └── main.js             # Scripts JavaScript
│   ├── img/
│   │   ├── hero/               # Imágenes para sección hero
│   │   ├── services/           # Imágenes para servicios
│   │   ├── gallery/            # Imágenes para galería (opcional)
│   │   └── logo.svg            # Logo vectorial
│   └── fonts/                  # Fuentes personalizadas
├── pages/                      # Páginas adicionales (si se necesitan)
│   ├── servicios.html          # Página detallada de servicios
│   └── galeria.html            # Galería de trabajos
├── README.md                   # Documentación del proyecto
└── .gitignore                  # Archivos a ignorar en Git

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript básico para interactividad
- Font Awesome para iconos
- Google Fonts para tipografía

## Instalación y Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/jose-plascencia-salon.git
Abrir el archivo index.html en cualquier navegador moderno

Para desarrollo:

Editar los archivos CSS en /assets/css/

Agregar nuevas imágenes en /assets/img/

Modificar contenido en index.html

Personalización
Cambiar colores principales
Editar el archivo variables.css

css
:root {
  --primary-green: #2c5f2d;
  --secondary-green: #3d8b40;
  --primary-orange: #ff7f41;
  --secondary-orange: #ff9d6f;
}
Actualizar información de contacto
Editar index.html (sección de contacto):

html
<div class="contact-item">
  <div class="contact-icon">
    <i class="fas fa-phone"></i>
  </div>
  <div class="contact-details">
    <h3>Teléfono</h3>
    <p>33 3397 8443</p> <!-- Actualizar aquí -->
  </div>
</div>
Agregar nuevas páginas
Crear nuevo archivo HTML en /pages/

Vincular en el menú de navegación:

html
<nav>
  <ul>
    <li><a href="pages/nueva-pagina.html">Nueva Página</a></li>
  </ul>
</nav>
Despliegue
El sitio puede desplegarse en cualquier servicio de hosting estático:

GitHub Pages

Netlify

Vercel

Hosting tradicional

Convenciones de Código
Indentación: 2 espacios

Nomenclatura CSS: BEM (Block__Element--Modifier)

Comentarios: Explicar secciones complejas

Responsive: Mobile-first approach

Mantenimiento
Para actualizar el sitio:

Cambiar horarios: Editar tabla en index.html (sección horarios)

Actualizar servicios: Modificar tarjetas en sección de servicios

Cambiar imágenes hero: Reemplazar archivos en /assets/img/hero/

Licencia
Este proyecto es propiedad de José Plascencia Salón. Todos los derechos reservados.

text

## Archivo .gitignore
Archivos a ignorar
.DS_Store
node_modules/
dist/
*.log
*.tmp
*.bak

Archivos de editor
.idea/
.vscode/
*.code-workspace

Archivos de sistema
Thumbs.db
ehthumbs.db

text

## Implementación Paso a Paso

1. **Crear la estructura de directorios:**
   ```bash
   mkdir jose-plascencia-salon
   cd jose-plascencia-salon
   mkdir -p assets/{css,js,img/{hero,services,gallery},pages}
   touch index.html README.md .gitignore
   touch assets/css/{main.css,variables.css,responsive.css}
   touch assets/js/main.js
