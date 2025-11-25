import MiLogo from '../../assets/unnamed.jpg'; 


export const Logo = () => (
  <div className="logo-contenedor">
    <img 
      src={MiLogo} 
      alt="Logo de la empresa" 
      className="logo-imagen" 
    />
  </div>
);