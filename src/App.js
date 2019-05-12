import React from "react";

/**
 * Por se tratar de um projeto para estudos, o framework Bootstrap esta sendo utilizado para agiliar o processo de criaçâo de estilos.
 * O uso do Styled Components ou Sass seria bem aceito aqui em outro momento.
 */

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Components
import List from "./components/List";
import Contagem from "./components/Contagem";
import ListAdd from "./components/ListAdd";

function App() {
  return (
    <Provider store={store}>
      <div className="container my-3">
        <h1>Lista de Tarefas</h1>
        <Contagem />
        <ListAdd />
        <List />
      </div>
    </Provider>
  );
}

export default App;
