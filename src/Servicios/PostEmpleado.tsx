import type { EmpleadoCreacionDTO } from "../Types/Empleado";

export async function PostEmpleado(empleado: EmpleadoCreacionDTO): Promise<boolean> {
  // Extraemos el código para ponerlo en la ruta y el resto para los parámetros
  const { codigo, ...params } = empleado;

  // Creamos un objeto URLSearchParams para construir la cadena de consulta
  const queryParams = new URLSearchParams(params).toString();

  const URL = `https://brrhh-production.up.railway.app/api/Empleados/Crear/${codigo}?${queryParams}`;

  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      // No hay 'headers' ni 'body' porque los datos van en la URL
    });

    if (!respuesta.ok) {
      const errorMsg = await respuesta.text();
      console.error("Error del servidor:", errorMsg);
      throw new Error(errorMsg || "Error al crear el empleado.");
    }

    const data = await respuesta.json();
    console.log("Empleado creado con éxito:", data);
    return true;

  } catch (err) {
    console.error("Error en la petición:", err);
    return false;
  }
}