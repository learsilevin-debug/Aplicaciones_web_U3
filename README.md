# PowerFit SPA - Catálogo Interactivo de Suplementos

Catálogo interactivo de suplementos deportivos desarrollado como una Single Page Application (SPA) y Progressive Web App (PWA) utilizando Vue 3 y Vite. Proyecto correspondiente a la Unidad 3 de la asignatura **Aplicaciones Web** (Universidad Politécnica Salesiana).

## Características Principales

- **Arquitectura Modular (Vue 3 Composition API):** Separación de responsabilidades mediante vistas inteligentes (`HomeView.vue`) y componentes presentacionales reutilizables (`ProductCard.vue`) comunicados vía `props` y `emits`.
- **Servicio HTTP Centralizado:** Consumo asíncrono de datos (`src/services/api.js`) con validación estricta de respuestas (`response.ok`) y manejo de estados reactivos (cargando, error con reintento, catálogo vacío y éxito).
- **Control de Stock y Carrito:** Validación dinámica de inventario en tiempo real (`v-if` / `v-else`), deshabilitación automática de productos agotados y contador interactivo de carrito de compras.
- **Progressive Web App (PWA):** Configurada con `vite-plugin-pwa`, Web App Manifest para instalación nativa y Service Worker con Workbox para caché de recursos estáticos y soporte offline básico.
- **Diseño UI/UX Responsivo:** Interfaz en modo oscuro de alto contraste, cuadrícula adaptable con CSS Grid, fotografías referenciales y microinteracciones.

## Estructura del Proyecto

```text
powerfit-spa/
├── public/
│   └── api/
│       └── products.json       # Base de datos local simulada (API JSON)
├── src/
│   ├── components/
│   │   └── ProductCard.vue     # Tarjeta individual de producto
│   ├── services/
│   │   └── api.js              # Servicio HTTP centralizado
│   ├── views/
│   │   └── HomeView.vue        # Vista principal del catálogo
│   ├── App.vue                 # Componente raíz y estilos globales
│   └── main.js                 # Punto de entrada y registro de Service Worker
├── index.html
├── package.json
└── vite.config.js              # Configuración de Vite y plugin PWA
```

## Configuración Recomendada del IDE

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y deshabilitar Vetur).

## Configuración Recomendada del Navegador

- Navegadores basados en Chromium (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Activar el formateador de objetos personalizados en Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Activar el formateador de objetos personalizados en Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Personalizar configuración

Consulta la [Referencia de Configuración de Vite](https://vite.dev/config/).

## Configuración e Instalación del Proyecto

```sh
npm install
```

### Compilar y recargar en caliente (Hot-Reload) para Desarrollo

```sh
npm run dev
```

### Compilar y minificar para Producción

```sh
npm run build
```

### Analizar código (Lint) con [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Autor

- **Michael Israel Nivelo Sanchez** - Estudiante de Ingeniería en Software, Universidad Politécnica Salesiana.
