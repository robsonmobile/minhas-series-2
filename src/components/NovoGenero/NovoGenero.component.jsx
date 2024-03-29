import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const NovoGenero = () => {
  const [name, setName] = useState('');
  const [sucess, setSucess] = useState(false);
  const onChange = e =>{
    setName(e.target.value)
  }

  const save = () => {
    axios.post('/api/genres', {
      name
    })
    .then(res => {
      setSucess(true)
    })
  }

  if(sucess) {
    return <Redirect to="/generos" />
  }

  return (
    <div className="container">
      <h1>Novo Genêro</h1>
      <form>
        <div className="form-group">
        <label 
          htmlFor="name">Nome</label>
        <input 
          type="text"
          value={name}
          onChange={onChange} 
          className="form-control" 
          id="name" 
          placeholder="Nome do genêro" />
      </div>
      <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero;