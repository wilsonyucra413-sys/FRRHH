export const PieDePagina = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-de-pagina">
      <p>&copy; {anioActual} Mi Empresa. Todos los derechos reservados.</p>
      <div className="pie-de-pagina-enlaces">
        <a href="/terminos">Términos de Servicio</a>
        <span>|</span>
        <a href="/privacidad">Política de Privacidad</a>
      </div>
    </footer>
  );
};