import { Link } from 'react-router-dom';
interface EnlaceNavegacionProps { texto: string; ruta: string; activo: boolean; }
export const EnlaceNavegacion = ({ texto, ruta, activo }: EnlaceNavegacionProps) => (
  <Link to={ruta} className={`enlace-navegacion ${activo ? 'activo' : ''}`}>{texto}</Link>
);