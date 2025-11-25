import type { NominaDTO_GET } from "../Types/Nomina";

export async function GetNominas(): Promise<NominaDTO_GET[]> {
  const URL = "https://brrhh-production.up.railway.app/api/Nomina/Listar";
  try {
    const respuesta = await fetch(`${URL}?timestamp=${new Date().getTime()}`);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener la lista de nóminas.");
    }
    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener nóminas:", error);
    return [];
  }
}