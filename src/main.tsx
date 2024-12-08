import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Nueva API de React 18
import './index.css' // Tu archivo de estilos
import App from './App.tsx' // Tu componente principal

// Crear el "root" donde se renderiza la aplicación
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
