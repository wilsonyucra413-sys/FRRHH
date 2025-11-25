import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaPersonas } from './Componentes/Pagina/PaginaPersonas';
import { PaginaEmpleados } from './Componentes/Pagina/PaginaEmpleados';
import { PaginaNominas } from './Componentes/Pagina/PaginaNominas';
import { PaginaPresupuestos } from './Componentes/Pagina/PaginaPresupuesto';
export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/personas" />} />
        <Route path="/personas" element={<PaginaPersonas />} />
        <Route path="/empleados" element={<PaginaEmpleados />} />
        <Route path="/nominas" element={<PaginaNominas />} />
        <Route path="/presupuesto" element={<PaginaPresupuestos />} />
        <Route path="*" element={<h1 style={{color: 'white'}}>404: Página No Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}