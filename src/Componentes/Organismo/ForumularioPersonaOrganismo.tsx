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


  useEffect(() => {

    if (mensajeRef.current && mensaje.texto) {

      mensajeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',    
      });
    }
  }, [mensaje.texto]); 

  return (
    <form onSubmit={handleSubmit} className="formulario-elegante">
      <CamposPersona persona={persona} onChange={handleChange} />
      <div className="grupo-formulario-grid">
        <span></span> {/* Columna vacía para alinear el botón */}
        <div>
          <Boton><button className="boton boton-principal">Registrar Persona</button></Boton>
          
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