import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Genres = () =>{
   const [data, setData] = useState([])
   useEffect(() => {
     axios
        .get('/api/genres')
        .then(res => {
          setData(res.data.data)
        })
   }, [])

   const renderizaLinha = record => {
     return (
       <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td></td>
      </tr>
     )
   }

   if(data.length === 0) {
    return (
      <div className="container">
        <div className="alert alert-warning" role="alert">
          Você não possui nenhum genêro!
        </div>
      </div>
    )
   }

   return (
     <div className="container">
       <h1>Generos</h1>
       <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
            {data.map(renderizaLinha)}
        </tbody>
        </table>
     </div>
   )
}

export default Genres;