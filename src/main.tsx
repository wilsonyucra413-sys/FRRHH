import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './GlobalCSS/EstiloGlobal.css';

// Componentes Atómicos
import './GlobalCSS/Componentes/Atomo/Logo.css';
import './GlobalCSS/Componentes/Atomo/Boton.css';
import './GlobalCSS/Componentes/Atomo/EnlaceNavegacion.css';

// Componentes de Moléculas
import './GlobalCSS/Componentes/Moleculas/CabeceraDeSeccion.css';

// Componentes de Organismos
import './GlobalCSS/Componentes/Organismo/BarraLateral.css';
import './GlobalCSS/Componentes/Organismo/PanelPrincipal.css';

// Componentes de Plantillas
import './GlobalCSS/Componentes/Plantilla/DisenoPrincipal.css';
import './GlobalCSS/Componentes/Moleculas/TablaPersona.css';
import './GlobalCSS/Componentes/Organismo/Formulario.css';
import './GlobalCSS/Componentes/Organismo/PieDePagina.css';
// import { PersonasOrganismo } from './Componentes/Organismo/ListaPersona'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
