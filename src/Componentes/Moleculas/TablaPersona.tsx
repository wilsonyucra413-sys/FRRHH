import type { PersonaDTO } from "../../Types/Persona";
import { Label } from "../Atomos/Label";

interface PropsTabla {
  lista: PersonaDTO[];
}

export function TablaPersonas({ lista }: PropsTabla) {
  if (!lista || lista.length === 0) {
    return <Label texto="No hay datos disponibles o la API no está conectada." />;
  }

  const columnas = Object.keys(lista[0]) as Array<keyof PersonaDTO>;

  return (
    <div className="tabla-contenedor">
      <table className="tabla-elegante">
        <thead>
          <tr>
            {columnas.map((columna) => (
              <th key={columna}>{columna}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lista.map((dato, i) => (
            <tr key={i}>
              {columnas.map((columna) => (
                <td key={columna}>{dato[columna]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}