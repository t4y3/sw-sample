import riot from 'riot';
import './core/polyfill';

// コンポーネント
import './components/sw-root/sw-root.tag';

// ServiceWorkerの登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  Promise.resolve().then(() => {
    riot.mount('*');
  });
});
