import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario2() {


  return (
    <div>
    <h1>Formulario2 Articulo </h1>
    <form>
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">Campo 2</label>
        <input type="text" className="form-control" id="input1" />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </div>
  );
}

export default Formulario2;
