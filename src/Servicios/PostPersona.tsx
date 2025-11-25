// CAMBIO: Ahora usa el nuevo tipo PersonaCreacionDTO
import type { PersonaDTO } from "../Types/Persona";

export async function PostPersona(persona: PersonaDTO): Promise<boolean> {
  const URL = "https://brrhh-production.up.railway.app/api/Personas/Crear"; 

  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });

    // Tu backend devuelve la persona creada si tiene éxito, o un NotFound si falla.
    if (respuesta.status === 404) {
        const errorMsg = await respuesta.text();
        console.error("Error del servidor (404):", errorMsg);
        throw new Error(errorMsg);
    }
    
    if (!respuesta.ok) {
      console.error("Error del servidor:", await respuesta.text());
      throw new Error("Error al crear la Persona");
    }

    const data = await respuesta.json();
    console.log("Persona creada con éxito:", data);
    return true; // Éxito

  } catch (err) {
    console.error("Error en la petición:", err);
    return false; // Fracaso
  }
}