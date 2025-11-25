import React, { useState } from 'react';
import { CamposEmpleado } from '../Moleculas/CamposEmpleado';
import type { EmpleadoCreacionDTO } from '../../Types/Empleado';
import { PostEmpleado } from '../../Servicios/PostEmpleado';

const estadoInicial: EmpleadoCreacionDTO = {
  codigo: '', persona: '', departamentoempresa: '', puesto: '',
  estadoempleado: '', fechaingreso: '', sucursal: '',
};

interface FormularioProps { onEmpleadoCreado: () => void; }
interface MensajeState { texto: string; tipo: 'exito' | 'error' | null; }

export function FormularioEmpleadoOrganismo({ onEmpleadoCreado }: FormularioProps) {
  const [empleado, setEmpleado] = useState<EmpleadoCreacionDTO>(estadoInicial);
  const [mensaje, setMensaje] = useState<MensajeState>({ texto: '', tipo: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmpleado(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensaje({ texto: 'Registrando empleado...', tipo: null });
    const exito = await PostEmpleado(empleado);
    if (exito) {
      setMensaje({ texto: "¡Empleado creado con éxito!", tipo: 'exito' });
      setEmpleado(estadoInicial);
      onEmpleadoCreado();
    } else {
      setMensaje({ texto: "Error al crear el empleado. Verifique los datos.", tipo: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-elegante">
      <CamposEmpleado empleado={empleado} onChange={handleChange} />
      <div className="grupo-formulario-grid">
        <span></span>
        <div>
          <button className="boton boton-principal">Registrar Empleado</button>
          {mensaje.texto && <p className={`mensaje-feedback ${mensaje.tipo || ''}`}>{mensaje.texto}</p>}
        </div>
      </div>
    </form>
  );
}