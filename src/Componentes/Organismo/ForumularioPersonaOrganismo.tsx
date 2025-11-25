import React, { useState, useRef, useEffect } 
from 'react';import { CamposPersona } from '../Moleculas/FormPersonaCampos';
import type { PersonaDTO } from '../../Types/Persona';
import { PostPersona } from '../../Servicios/PostPersona';
import { Boton } from '../Atomos/Boton';

interface FormularioProps {
  onPersonaCreada: () => void;
}
interface MensajeState {
  texto: string;
  tipo: 'exito' | 'error' | null;
}
const estadoInicial: PersonaDTO = {
  Nombre: '', Apellidos: '', Ci: '', Sexo: '', FechaNacimiento: '',
};

export function FormularioPersonaOrganismo({ onPersonaCreada }: FormularioProps) {
  const [persona, setPersona] = useState<PersonaDTO>(estadoInicial);
  const [mensaje, setMensaje] = useState<MensajeState>({ texto: '', tipo: null });

  // --- PASO 2: CREAMOS UNA REFERENCIA PARA EL MENSAJE ---
  // Esta referencia apuntará al párrafo (<p>) del mensaje en el DOM.
  const mensajeRef = useRef<HTMLParagraphElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPersona(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje({ texto: 'Enviando...', tipo: null });
    const exito = await PostPersona(persona);
    if (exito) {
      setMensaje({ texto: "¡Persona creada con éxito!", tipo: 'exito' });
      setPersona(estadoInicial);
      onPersonaCreada();
    } else {
      setMensaje({ texto: "Hubo un error al crear la persona.", tipo: 'error' });
    }
  };

  // --- PASO 3: CREAMOS EL EFECTO DE DESLIZAMIENTO ---
  // Este código se ejecutará CADA VEZ que `mensaje.texto` cambie.
  useEffect(() => {
    // Si la referencia existe y el mensaje no está vacío...
    if (mensajeRef.current && mensaje.texto) {
      // ...le decimos al navegador que se deslice suavemente a ese elemento.
      mensajeRef.current.scrollIntoView({
        behavior: 'smooth', // Animación suave
        block: 'center',    // Centra el elemento en la pantalla
      });
    }
  }, [mensaje.texto]); // La dependencia: se ejecuta solo si el texto del mensaje cambia.

  return (
    <form onSubmit={handleSubmit} className="formulario-elegante">
      <CamposPersona persona={persona} onChange={handleChange} />
      <div className="grupo-formulario-grid">
        <span></span> {/* Columna vacía para alinear el botón */}
        <div>
          <button className="boton boton-principal">Registrar Persona</button>
          
          {/* Añadimos la 'ref' a nuestro párrafo de mensaje */}
          {mensaje.texto && (
            <p ref={mensajeRef} className={`mensaje-feedback ${mensaje.tipo || ''}`}>
              {mensaje.texto}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}