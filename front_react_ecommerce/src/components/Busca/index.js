import Ordenar from "../Ordenar";
import React, { useState } from "react";

function Busca(props) {

  const [termoDeBusca, setTermoDeBusca] = useState("");

  function handleFilmesOrdenados(filmesordenar) {
    props.onOpcaoDeOrdenacao(filmesordenar);
  }

  function handleChange(event) {
    const value = event.target.value;

    props.onTermoDeBusca(value);

    setTermoDeBusca(value);
  }

  function handleClick() {

    props.onTermoDeBusca(termoDeBusca);

   
  }

   


  return (
    <div>
      <div className="input-group mb-4 mx-auto" style={{ width: "600px" }}>
        <input
          type="search"
          className="form-control"
          placeholder="Digite o nome do filme"
          aria-label="Digite o nome do filme"
          aria-describedby="button-addon2"
          value={props.termoDeBusca}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Buscar
          </button>
        </div>
        <div className="input-group-append">
          <Ordenar onOpcaoDeOrdenacao={handleFilmesOrdenados} />
        </div>
      </div>
    </div>
  );
}

export default Busca;