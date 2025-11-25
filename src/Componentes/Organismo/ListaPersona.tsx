import { TablaPersonas } from "../Moleculas/TablaPersona";
import { Label } from "../Atomos/Label";
import type { PersonaDTO } from "../../Types/Persona";
// Ahora recibe props
interface PersonasOrganismoProps {
  lista: PersonaDTO[];
  cargando: boolean;
}

export function PersonasOrganismo({ lista, cargando }: PersonasOrganismoProps) {
  // Ya no tiene lógica de fetch, solo de presentación
  if (cargando) {
    return <Label texto="Cargando datos..." />;
  }

  return <TablaPersonas lista={lista} />;
}