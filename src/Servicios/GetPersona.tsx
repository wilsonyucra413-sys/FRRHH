import type { PersonaDTO } from "../Types/Persona";
export async function GetPersona(): Promise<PersonaDTO[]> {
  const URL = "https://brrhh-production.up.railway.app/api/Personas/Listar";
  const respuesta = await fetch(URL);
  if (!respuesta.ok) throw new Error("No se pudo obtener los datos.");
  const datos = await respuesta.json();
  return datos;
}
