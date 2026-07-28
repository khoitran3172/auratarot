import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import App from './App.tsx';
import './index.css';

// Animations honour `prefers-reduced-motion` by default. `?motion=always`
// forces them on so the reading-room choreography can still be demoed or
// reviewed on a machine that has the OS setting enabled.
const forceMotion = new URLSearchParams(window.location.search).get('motion') === 'always';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion={forceMotion ? 'never' : 'user'}>
      <App />
    </MotionConfig>
  </StrictMode>,
);
