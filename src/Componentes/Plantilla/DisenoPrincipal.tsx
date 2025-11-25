import React from 'react';

interface DisenoPrincipalProps {
  barraLateral: React.ReactNode;
  contenidoPrincipal: React.ReactNode;
   pieDePagina: React.ReactNode; 
}
export const DisenoPrincipal = ({ barraLateral, contenidoPrincipal, pieDePagina }: DisenoPrincipalProps) => {
  return (
    <div className="diseno-principal">
      {barraLateral}
      <div className="area-principal">
        {contenidoPrincipal}
        {pieDePagina}
      </div>
    </div>
  );
};