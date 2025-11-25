import React, { useState } from 'react';
import { CamposNomina } from '../Moleculas/CamposNomina';
import type { NominaCreacionDTO } from '../../Types/Nomina';
import { PostNomina } from '../../Servicios/PostNomina';

const estadoInicial: NominaCreacionDTO = {
  codigo: '', empleado: '', periodoinicio: '', periodofin: '', total: 0, totaldescuento: 0,
};

interface FormularioProps { onNominaCreada: () => void; }
interface MensajeState { texto: string; tipo: 'exito' | 'error' | null; }

export function FormularioNominaOrganismo({ onNominaCreada }: FormularioProps) {
  const [nomina, setNomina] = useState<NominaCreacionDTO>(estadoInicial);
  const [mensaje, setMensaje] = useState<MensajeState>({ texto: '', tipo: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setNomina(prevState => ({ 
      ...prevState, 
      [name]: type === 'number' ? parseFloat(value) || 0 : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje({ texto: 'Registrando nómina...', tipo: null });
    const exito = await PostNomina(nomina);
    if (exito) {
      setMensaje({ texto: "¡Nómina creada con éxito!", tipo: 'exito' });
      setNomina(estadoInicial);
      onNominaCreada();
    } else {
      setMensaje({ texto: "Error al crear la nómina. Verifique los datos.", tipo: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-elegante">
      <CamposNomina nomina={nomina} onChange={handleChange} />
      <div className="grupo-formulario-grid">
        <span></span>
        <div>
          <button className="boton boton-principal">Registrar Nómina</button>
          {mensaje.texto && <p className={`mensaje-feedback ${mensaje.tipo || ''}`}>{mensaje.texto}</p>}
        </div>
      </div>
    </form>
  );
}