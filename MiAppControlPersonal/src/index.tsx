import React from 'react';
import ReactDOM from 'react-dom/client';  // Importar `createRoot`
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Cargar los elementos PWA de Ionic
defineCustomElements(window);

// Crear el root para React 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);  // Usa `createRoot` en lugar de `render`

// Renderiza el componente `App`
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar o desregistrar el service worker
serviceWorker.unregister();
