import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat";
import { ChatContext } from "./context/ChatProvider";

function App() {
  const { usuario } = useContext(ChatContext);

  return usuario !== null ? (
    <div>
      <NavBar />
      {usuario.estado ? (
        <Chat />
      ) : (
        <div className='lead text-center mt-5 display-4'>
          Debes Iniciar Sesion
        </div>
      )}
    </div>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
