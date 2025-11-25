interface PropsInput {
  label: string;
  name: string;
  type?: string;
  value: string ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputTexto({ label, name, type = "text", value, onChange }: PropsInput) {
  return (
    <div className="grupo-formulario-grid">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}
