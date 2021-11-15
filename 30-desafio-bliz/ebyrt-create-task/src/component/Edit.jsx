import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Edit( dados ) {

   const api = axios.create({
      baseURL: 'http://localhost:3001'
    })
    
    const { id } = dados.location
    const { msg } = dados.location
    const { status } = dados.location
    const [inputEdit, setInputEdit] = useState(msg)
    const [statusElemet, setStatusElemet] = useState(status)
   
   const [msgParaphi, setMsgParaphi] = useState(msg);
   const [msgParaphiStatus, setMsgParaphiStatus] = useState(status);

   const editTask = async (e) => {
      e.preventDefault();
      setInputEdit(inputEdit);
      setMsgParaphi(inputEdit)
      setMsgParaphiStatus(statusElemet)
      
      await api.put(`/tasks/${id}`, {
        message: inputEdit,
        status: statusElemet
      })
   };
  
   return (
   <div className="containerEdit">   
      <h1>Edite tarefa</h1>

      <p>Tareta a ser modificado: ( <span> {msgParaphi} </span> )</p>
      <p>Status atual: ( <span> {msgParaphiStatus} </span> )</p>

      <form onSubmit={ editTask }>
      <div>
         <input
            value={ inputEdit }
            onChange={ ({ target }) => setInputEdit(target.value) }
            type="text"
            name="name"
            placeholder="Modifique tarefa"
            className="inputEdit"
            maxLength="33"
            autocomplete="off"
         />
         <select
            name="select"
            value={statusElemet}
            onChange={ ({ target }) => setStatusElemet(target.value) }>
            <option value="pronto">Pronto</option>
            <option value="pendente">Pendente</option>
            <option value="andamento">Andamento</option>
           </select>
      </div>
      <br></br>
      <div>
         <button type="submit">Salvar alterações</button>
      </div>
      </form>
       <Link to={'/'}>
          <h3>Pagina inicial</h3>
      </Link>
   </div>
   )
   
}

export default Edit;
