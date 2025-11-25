import { useState, useEffect, useCallback } from 'react';
import { BarraLateral } from '../Organismo/BarraLateral';
import { PanelPrincipal } from '../Organismo/PanelPrincipal';
import { DisenoPrincipal } from '../Plantilla/DisenoPrincipal';
import { PieDePagina } from '../Organismo/PiePagaina';
import { PresupuestosOrganismo } from '../Organismo/PresupuestoOrganismo';
import { GetPresupuestos } from '../../Servicios/GetPresupuesto';
import type { PresupuestoDTO } from '../../Types/Presupuesto';
import { CabeceraDeSeccion } from '../Moleculas/CabeceraDeSeccion';
export const PaginaPresupuestos = () => {
  const [listaPresupuestos, setListaPresupuestos] = useState<PresupuestoDTO[]>([]);
  const [cargando, setCargando] = useState(true);

  const refrescarLista = useCallback(async () => {
    setCargando(true);
    const data = await GetPresupuestos();
    setListaPresupuestos(data);
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
          {/* Como es solo de lectura, la cabecera no necesita botones */}
          <CabeceraDeSeccion titulo="Presupuestos" botones={[]} />
          
          <section className='contenido-pagina'>
            <PresupuestosOrganismo lista={listaPresupuestos} cargando={cargando} />
          </section>
        </PanelPrincipal>
      }
      pieDePagina={<PieDePagina />}
    />
  );
};