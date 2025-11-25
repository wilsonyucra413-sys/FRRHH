import React from 'react';

export const PanelPrincipal = ({ children }: { children: React.ReactNode }) => (
  <main style={{ flexGrow: 1, padding: '2rem' }}>
    {children}
  </main>
);