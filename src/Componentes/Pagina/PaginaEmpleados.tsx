import { useState, useEffect, useCallback } from 'react';
import { BarraLateral } from '../Organismo/BarraLateral';
import { CabeceraDeSeccion } from '../Moleculas/CabeceraDeSeccion';
import { PanelPrincipal } from '../Organismo/PanelPrincipal';
import  {DisenoPrincipal} from '../Plantilla/DisenoPrincipal'
import { PieDePagina } from '../Organismo/PiePagaina';
import type { EmpleadoDTO_GET } from '../../Types/Empleado';
import { EmpleadosOrganismo } from '../Organismo/EmpleadoOrganismo';
import { FormularioEmpleadoOrganismo } from '../Organismo/FormularioEmpleadoOrganismo';
import { GetEmpleados } from '../../Servicios/GetEmpleados';
type Vista = 'inicio'|'ver' | 'agregar';

export const PaginaEmpleados = () => {
  const [vistaActual, setVistaActual] = useState<Vista>('inicio');
  const [listaEmpleados, setListaEmpleados] = useState<EmpleadoDTO_GET[]>([]);
  const [cargando, setCargando] = useState(true);

  const refrescarLista = useCallback(async () => {
    setCargando(true);
    const data = await GetEmpleados();
    setListaEmpleados(data);
    setCargando(false);
  }, []);

  useEffect(() => {
    refrescarLista();
  }, [refrescarLista]);

  return (
    <DisenoPrincipal
      barraLateral={<BarraLateral />}
      contenidoPrincipal={
        <PanelPrincipal>
          <CabeceraDeSeccion
            titulo="Empleados"
            botones={[
              { texto: 'Ver Empleados', accion: () => setVistaActual('ver') },
              { texto: 'Agregar Empleado', accion: () => setVistaActual('agregar') }
            ]}
          />
          <section className='contenido-pagina'>
            {vistaActual === 'inicio' && ( //-aqui el error 
              <>
                <h1>Bienvenido a la sección de Empleados</h1>
                <p>Elige una acción para comenzar.</p>
              </>
            )}
            {vistaActual === 'ver' && (
              <EmpleadosOrganismo lista={listaEmpleados} cargando={cargando} />
            )}
            {vistaActual === 'agregar' && (
              <FormularioEmpleadoOrganismo onEmpleadoCreado={refrescarLista} />
            )}
          </section>
        </PanelPrincipal>
      }
      pieDePagina={<PieDePagina />}
    />
  );
};