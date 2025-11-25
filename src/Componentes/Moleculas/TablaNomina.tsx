import type { NominaDTO_GET } from "../../Types/Nomina";
import { Label } from "../Atomos/Label";

interface PropsTabla {
lista: NominaDTO_GET[];
}

export function TablaNominas({ lista }: PropsTabla) {
if (!lista || lista.length === 0) {
return <Label texto="No hay nóminas para mostrar." />;
}
const columnas = Object.keys(lista[0]) as Array<keyof NominaDTO_GET>;
return (
<div className="tabla-contenedor">
<table className="tabla-elegante">
<thead>
<tr>{columnas.map(c => <th key={c}>{c}</th>)}</tr>
</thead>
<tbody>
{lista.map((dato, i) => (
<tr key={i}>{columnas.map(c => <td key={c}>{dato[c]}</td>)}</tr>
))}
</tbody>
</table>
</div>
);
}