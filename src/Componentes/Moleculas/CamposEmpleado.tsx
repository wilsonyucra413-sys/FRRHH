import { InputTexto } from "../Atomos/Input";
import type { EmpleadoCreacionDTO } from "../../Types/Empleado";

interface PropsCampos {
  empleado: EmpleadoCreacionDTO;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CamposEmpleado({ empleado, onChange }: PropsCampos) {
  return (
    <>
      <InputTexto label="Código Empleado" name="codigo" value={empleado.codigo} onChange={onChange}  />
      <InputTexto label="CI Persona" name="persona" value={empleado.persona} onChange={onChange}  />
      <InputTexto label="Cód. Departamento" name="departamentoempresa" value={empleado.departamentoempresa} onChange={onChange}  />
      <InputTexto label="Cód. Puesto" name="puesto" value={empleado.puesto} onChange={onChange}  />
      <InputTexto label="Cód. Estado" name="estadoempleado" value={empleado.estadoempleado} onChange={onChange}  />
      <InputTexto type="date" label="Fecha de Ingreso" name="fechaingreso" value={empleado.fechaingreso} onChange={onChange} />
      <InputTexto label="Sucursal" name="sucursal" value={empleado.sucursal} onChange={onChange}  />
    </>
  );
}