import { InputTexto } from "../Atomos/Input";
import type { NominaCreacionDTO } from "../../Types/Nomina";

interface PropsCampos {
  nomina: NominaCreacionDTO;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CamposNomina({ nomina, onChange }: PropsCampos) {
  return (
    <>
      <InputTexto label="Código Nómina" name="codigo" value={nomina.codigo} onChange={onChange}  />
      <InputTexto label="Código Empleado" name="empleado" value={nomina.empleado} onChange={onChange} />
      <InputTexto type="date" label="Periodo Inicio" name="periodoinicio" value={nomina.periodoinicio} onChange={onChange} />
      <InputTexto type="date" label="Periodo Fin" name="periodofin" value={nomina.periodofin} onChange={onChange} />
      <InputTexto type="number" label="Total" name="total" value={nomina.total} onChange={onChange} />
      <InputTexto type="number" label="Total Descuento" name="totaldescuento" value={nomina.totaldescuento} onChange={onChange}  />
    </>
  );
}