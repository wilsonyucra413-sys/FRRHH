import { useState, useEffect, useCallback } 
from 'react';import { BarraLateral } from '../Organismo/BarraLateral';
import { CabeceraDeSeccion } from '../Moleculas/CabeceraDeSeccion';
import { PanelPrincipal } from '../Organismo/PanelPrincipal';
import { DisenoPrincipal } from '../Plantilla/DisenoPrincipal';
import { PieDePagina } from '../Organismo/PiePagaina';
import type{ NominaDTO_GET } from '../../Types/Nomina';
import { NominasOrganismo } from '../Organismo/NominasOrganismo';
import { FormularioNominaOrganismo } from '../Organismo/FormlarioNominaOrganismo';
import { GetNominas } from '../../Servicios/GetNomina';
type Vista = 'inicio' | 'ver' | 'agregar';

export const PaginaNominas = () => {
  const [vistaActual, setVistaActual] = useState<Vista>('inicio');
  const [listaNominas, setListaNominas] = useState<NominaDTO_GET[]>([]);
  const [cargando, setCargando] = useState(true);

  const refrescarLista = useCallback(async () => {
    setCargando(true);
    const data = await GetNominas();
    setListaNominas(data);
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
            titulo="Nominas"
            botones={[
              { texto: 'Ver Nóminas', accion: () => setVistaActual('ver') },
              { texto: 'Agregar Nómina', accion: () => setVistaActual('agregar') }
            ]}
          />
          <section className='contenido-pagina'>
            {vistaActual === 'inicio' && (
              <>
                <h1>Bienvenido a la sección de Nóminas</h1>
                <p>Elige una acción para comenzar.</p>
              </>
            )}
            {vistaActual === 'ver' && (
              <NominasOrganismo lista={listaNominas} cargando={cargando} />
            )}
            {vistaActual === 'agregar' && (
              <FormularioNominaOrganismo onNominaCreada={refrescarLista} />
            )}
          </section>
        </PanelPrincipal>
      }
      pieDePagina={<PieDePagina />}
    />
  );
};