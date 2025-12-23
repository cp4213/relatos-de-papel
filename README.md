# relatos-de-papel

Base React (Vite) + Bootstrap.

## Requisitos
- Node 22+
- npm 10+

## Instalar
```bash
npm install 
```

## Ejecutar dev
```bash
npm run dev
```
## Estructura de carpetas
```text
relatos-de-papel/
├─ public/                   # Estáticos servidos tal cual (favicon, imágenes públicas, etc.)
├─ src/
│  ├─ assets/                # Imágenes, íconos, fuentes y otros recursos estáticos
│  ├─ components/            # Componentes reutilizables (Navbar, Card, Button...)
│  ├─ pages/                 # Pantallas/vistas (Home, About, Login...)
│  ├─ services/              # Consumo de APIs (fetch/axios), configuración de endpoints, adaptadores, etc.
│  ├─ styles/                # CSS propio (global, variables, utilidades)
│  ├─ App.jsx                # Componente raíz de la aplicación
│  ├─ main.jsx               # Entry point: render de <App /> + imports globales (Bootstrap, estilos)
│  └─ index.css              # CSS global (opcional)
├─ index.html                # HTML base (contiene <div id="root"></div>)
├─ package.json              # Dependencias y scripts del proyecto
├─ vite.config.js            # Configuración de Vite
└─ README.md                 # Documentación del proyecto
```

