import type { NominaDTO_GET } from "../../Types/Nomina";
import { TablaNominas } from "../Moleculas/TablaNomina";
import { Label } from "../Atomos/Label";

interface NominasOrganismoProps {
  lista: NominaDTO_GET[];
  cargando: boolean;
}

export function NominasOrganismo({ lista, cargando }: NominasOrganismoProps) {
  if (cargando) return <Label texto="Cargando nóminas..." />;
  return <TablaNominas lista={lista} />;
}