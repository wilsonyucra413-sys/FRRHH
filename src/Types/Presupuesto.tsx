export type PresupuestoDTO = {
  id: number;
  departamento: string;
  montoTotal: number;
  montoEjecutado: number;
  saldo: number;
  mes: number;
  anio: number;
  estado: string;
  fechaCreacion: string; 
};