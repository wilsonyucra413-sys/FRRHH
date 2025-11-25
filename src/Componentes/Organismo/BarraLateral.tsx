import { useLocation } from 'react-router-dom';
import { Logo } from '../Atomos/Logo';
import { EnlaceNavegacion } from '../Atomos/EnlaceNavegacion';

export const BarraLateral = () => {
  const location = useLocation();
  const itemsNavegacion = [
    { id: 'personas', texto: 'Personas', ruta: '/personas' },
    { id: 'empleados', texto: 'Empleados', ruta: '/empleados' },
    { id: 'nominas', texto: 'Nominas', ruta: '/nominas' },
    { id: 'presupuesto', texto: 'Presupuesto', ruta: '/presupuesto' }
  ];
  return (
    <aside className="barra-lateral">
      <Logo />
      <nav>
        {itemsNavegacion.map((item) => (
          <EnlaceNavegacion
            key={item.id}
            texto={item.texto}
            ruta={item.ruta}
            activo={location.pathname === item.ruta}
          />
        ))}
      </nav>
    </aside>
  );
};
        