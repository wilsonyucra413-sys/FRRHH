import type { EmpleadoDTO_GET } from "../../Types/Empleado";
import { TablaEmpleados } from "../Moleculas/TablaEmpleados";
import { Label } from "../Atomos/Label";

interface EmpleadosOrganismoProps {
  lista: EmpleadoDTO_GET[];
  cargando: boolean;
}

export function EmpleadosOrganismo({ lista, cargando }: EmpleadosOrganismoProps) {
  if (cargando) return <Label texto="Cargando empleados..." />;
  return <TablaEmpleados lista={lista} />;
}