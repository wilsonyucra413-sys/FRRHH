import type { EmpleadoDTO_GET } from "../Types/Empleado";

export async function GetEmpleados(): Promise<EmpleadoDTO_GET[]> {
  const URL = "https://brrhh-production.up.railway.app/api/Empleados/Listar";
  try {
    // Añadimos un timestamp para evitar problemas de caché
    const respuesta = await fetch(`${URL}?timestamp=${new Date().getTime()}`);
    if (!respuesta.ok) {
      throw new Error("No se pudo obtener la lista de empleados.");
    }
    return await respuesta.json();
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    return [];
  }
}