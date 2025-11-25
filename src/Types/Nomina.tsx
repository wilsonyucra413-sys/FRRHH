export type NominaDTO_GET = {
  codigo: string;
  empleado: string; // Código del empleado
  periodoInicio: string;
  periodoFin: string;
  totalNeto: number;
};

export type NominaCreacionDTO = {
  codigo: string;
  empleado: string;
  periodoinicio: string;
  periodofin: string;
  total: number;
  totaldescuento: number;
};