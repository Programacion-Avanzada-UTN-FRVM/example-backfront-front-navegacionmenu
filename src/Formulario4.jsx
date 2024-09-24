import React from 'react'

function Formulario4() {
  return (
    <div>
      <h1>Formulario 4</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">Campo 1</label>
          <input type="text" className="form-control" id="input1" />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario4