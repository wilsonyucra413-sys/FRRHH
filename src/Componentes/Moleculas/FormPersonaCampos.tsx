import { InputTexto } from "../Atomos/Input";
import type { PersonaDTO } from "../../Types/Persona";
import { Select } from "../Atomos/Select";


interface PropsCampos {
  persona: PersonaDTO;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function CamposPersona({ persona, onChange }: PropsCampos) {
  const opcionesSexo = [
    { valor: 'M', texto: 'Masculino' },
    { valor: 'F', texto: 'Femenino' },
  ];

  return (
    <>
      <InputTexto label="Nombre" name="Nombre" value={persona.Nombre} onChange={onChange}  />
      <InputTexto label="Apellidos" name="Apellidos" value={persona.Apellidos} onChange={onChange}  />
      <InputTexto label="CI" name="Ci" value={persona.Ci} onChange={onChange} />
      <InputTexto type="date" label="Fecha de Nacimiento" name="FechaNacimiento" value={persona.FechaNacimiento} onChange={onChange} />
      <Select label="Sexo" name="Sexo" value={persona.Sexo} onChange={onChange} opciones={opcionesSexo} />
    </>
  );
}