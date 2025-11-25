import type { PresupuestoDTO } from "../../Types/Presupuesto";
import { TablaPresupuestos } from "../Moleculas/TablaPresupuesto";
import { Label } from "../Atomos/Label";

interface PresupuestosOrganismoProps {
  lista: PresupuestoDTO[];
  cargando: boolean;
}

export function PresupuestosOrganismo({ lista, cargando }: PresupuestosOrganismoProps) {
  if (cargando) return <Label texto="Cargando presupuestos..." />;
  return <TablaPresupuestos lista={lista} />;
}