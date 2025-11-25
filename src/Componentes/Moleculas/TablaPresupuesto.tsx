import type { PresupuestoDTO } from "../../Types/Presupuesto";
import { Label } from "../Atomos/Label";

interface PropsTabla {
  lista: PresupuestoDTO[];
}

export function TablaPresupuestos({ lista }: PropsTabla) {
  if (!lista || lista.length === 0) {
    return <Label texto="No hay datos de presupuesto para mostrar." />;
  }
  // Genera las columnas dinámicamente desde el primer objeto
  const columnas = Object.keys(lista[0]) as Array<keyof PresupuestoDTO>;

  return (
    <div className="tabla-contenedor">
      <table className="tabla-elegante">
        <thead>
          <tr>{columnas.map(c => <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {lista.map((dato, i) => (
            <tr key={i}>{columnas.map(c => <td key={c}>{String(dato[c])}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}