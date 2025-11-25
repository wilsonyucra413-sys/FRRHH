export type PersonaDTO = {
  Nombre: string;
  Apellidos: string;
  Ci: string;
  Sexo: string; // Es un string
  FechaNacimiento: string; // DateOnly se convierte a string en JSON
};