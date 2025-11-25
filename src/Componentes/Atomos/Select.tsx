import React from 'react';

interface Option {
  valor: string;
  texto: string;
}

interface PropsSelect {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  opciones: Option[];
}

export function Select({ label, name, value, onChange, opciones }: PropsSelect) {
  return (
    <div className="grupo-formulario">
      <label htmlFor={name} className="label-formulario">{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} className="input-formulario">
        <option value="" disabled>Seleccione una opción</option>
        {opciones.map(opt => (
          <option key={opt.valor} value={opt.valor}>{opt.texto}</option>
        ))}
      </select>
    </div>
  );
}