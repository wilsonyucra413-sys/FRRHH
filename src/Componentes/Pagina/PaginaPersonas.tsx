import { useState, useEffect, useCallback } from 'react'; // <-- Añade useEffect y useCallback
import { BarraLateral } from '../Organismo/BarraLateral';
import { CabeceraDeSeccion } from '../Moleculas/CabeceraDeSeccion';
import { PanelPrincipal } from '../Organismo/PanelPrincipal';
import { DisenoPrincipal } from '../Plantilla/DisenoPrincipal';
import { PersonasOrganismo } from '../Organismo/ListaPersona';
import { FormularioPersonaOrganismo } from '../Organismo/ForumularioPersonaOrganismo';
import { GetPersona } from '../../Servicios/GetPersona';
import type { PersonaDTO } from '../../Types/Persona';
import { PieDePagina } from '../Organismo/PiePagaina';
type Vista = 'inicio' | 'ver' | 'agregar'; // <-- Añadimos 'agregar'

export const PaginaPersonas = () => {
  const [vistaActual, setVistaActual] = useState<Vista>('inicio');
  const [listaPersonas, setListaPersonas] = useState<PersonaDTO[]>([]);
  const [cargando, setCargando] = useState(true); // Empieza en true

  const refrescarLista = useCallback(async () => {
    setCargando(true);
    const data = await GetPersona();
    setListaPersonas(data);
    setCargando(false);
  }, []);

  useEffect(() => {
    // Carga la lista solo una vez cuando el componente se monta por primera vez
    refrescarLista();
  }, [refrescarLista]);

  return (
    <DisenoPrincipal
      barraLateral={<BarraLateral />}
      contenidoPrincipal={
        <PanelPrincipal>
          <CabeceraDeSeccion
            titulo="Personas"
            botones={[
              { texto: 'Ver Personas', accion: () => setVistaActual('ver') },
              { texto: 'Agregar Persona', accion: () => setVistaActual('agregar') }
            ]}
          />
          <section className="contenido-pagina">
            {vistaActual === 'inicio' && (
              <>
                <h1>Bienvenido a la sección de Personas</h1>
                <p>Elige una acción para comenzar.</p>
              </>
            )}
            
            {vistaActual === 'ver' && (
              <PersonasOrganismo lista={listaPersonas} cargando={cargando} />
            )}

            {vistaActual === 'agregar' && (
              <FormularioPersonaOrganismo onPersonaCreada={refrescarLista} />
            )}
          </section>
        </PanelPrincipal>
      }
      pieDePagina={<PieDePagina></PieDePagina>}
    />
  );
};