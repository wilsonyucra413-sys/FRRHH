import type { PresupuestoDTO } from "../Types/Presupuesto";

export async function GetPresupuestos(): Promise<PresupuestoDTO[]> {
  const URL = "https://contabilidadfin-production.up.railway.app/api/Presupuestos";
  try {
    const respuesta = await fetch(`${URL}?timestamp=${new Date().getTime()}`);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener la lista de presupuestos.");
    }
    const datos = await respuesta.json();
    // Railway a veces envuelve la respuesta. Nos aseguramos de devolver el array.
    return Array.isArray(datos) ? datos : datos.data || [];
  } catch (error) {
    console.error("Error al obtener presupuestos:", error);
    return [];
  }
}