import React from 'react';
interface BotonProps { children: React.ReactNode; onClick?: () => void; }
export const Boton = ({ children, onClick }: BotonProps) => (
  <button className="boton" onClick={onClick}>{children}</button>
);