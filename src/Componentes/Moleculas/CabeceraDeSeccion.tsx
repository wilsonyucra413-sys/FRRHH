import { Boton } from '../Atomos/Boton';
interface CabeceraDeSeccionProps { titulo: string; botones: { texto: string, accion: () => void }[]; }
export const CabeceraDeSeccion = ({ titulo, botones }: CabeceraDeSeccionProps) => (
    <header className="cabecera-seccion">
        <div className="botones">
            <Boton>{titulo}</Boton>
            {botones.map(btn => (<Boton key={btn.texto} onClick={btn.accion}>{btn.texto}</Boton>))}
        </div>
        <div className="subrayado"></div>
    </header>
);