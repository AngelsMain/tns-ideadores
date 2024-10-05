// Si quieres habilitar el service worker, cambia `unregister` por `register`.
export function register(config?: Config): void {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto es localhost. Verifica si el service worker existe.
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            console.log('Esta aplicación está siendo servida desde el caché por un service worker.');
          });
        } else {
          // Registra el service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  