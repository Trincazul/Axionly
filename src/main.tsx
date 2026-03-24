import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Adicionamos o basename para o React entender que o site começa em /Axionly/ */}
    <BrowserRouter basename="/Axionly">
      <App />
    </BrowserRouter>
  </StrictMode>
);
