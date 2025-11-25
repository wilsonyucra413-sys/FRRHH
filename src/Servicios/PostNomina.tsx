import type { NominaCreacionDTO } from "../Types/Nomina";

export async function PostNomina(nomina: NominaCreacionDTO): Promise<boolean> {
  // Extraemos el código para la ruta y el resto para los parámetros
  const { codigo, ...params } = nomina;

  // Convertimos los números a string para URLSearchParams
  const queryParams = new URLSearchParams({
    ...params,
    total: params.total.toString(),
    totaldescuento: params.totaldescuento.toString(),
  }).toString();

  const URL = `https://brrhh-production.up.railway.app/api/Nomina/Crear/${codigo}?${queryParams}`;

  try {
    const respuesta = await fetch(URL, { method: "POST" });
    if (!respuesta.ok) {
      const errorMsg = await respuesta.text();
      throw new Error(errorMsg || "Error al crear la nómina.");
    }
    const data = await respuesta.json();
    console.log("Nómina creada con éxito:", data);
    return true;
  } catch (err) {
    console.error("Error en la petición de nómina:", err);
    return false;
  }
}