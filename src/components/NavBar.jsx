import React, { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";

const NavBar = () => {
  const { usuario, ingresoUsuario, cerrarSesion } = useContext(ChatContext);

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand'>Chat</span>
      {usuario.estado ? (
        <div className='btn btn-outline-danger my-2' onClick={cerrarSesion}>
          Cerrar Sesion
        </div>
      ) : (
        <div className='btn btn-outline-success my-2' onClick={ingresoUsuario}>
          Acceder
        </div>
      )}
    </nav>
  );
};

export default NavBar;
