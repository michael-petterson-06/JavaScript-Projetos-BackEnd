import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Functionalities from '../component/Functionalities';
import './Home.css';

function Home() {

  const api = axios.create({
    baseURL: 'http://localhost:3001'
  })

  const [allTask, setAllTask] = useState([]);
  const [inputar, setInputar] = useState('');
  const [status, setStatus] = useState('andamento');
  const [sortCondition, setSortCondition] = useState(false);
  
  async function getAllTasks(){
    const response = await api.get('/tasks')
    setAllTask(response.data)
  }
  
  useEffect(() => {
    getAllTasks();
  }, []);
  
  //copia array sem criar referencias com o array original
  const allTaskMoch =  allTask.slice();
  
  const sortAlphabetical = () => {
      let taksALphabetical= '';
      if (sortCondition){
          setSortCondition(false)
          taksALphabetical = allTaskMoch.sort(function(a,b) {
          if(a.message > b.message) return -1;
          return 0;
        });
      }
      else {
        setSortCondition(true)
        taksALphabetical = allTaskMoch.sort(function(a,b) {
        if(a.message < b.message) return -1;
        return 0;
      });
    } 
    setAllTask(taksALphabetical)
  }

    const createTask = async (e) => {
     e.preventDefault();
     setAllTask([...allTask, { message: inputar, status } ]);
     setInputar('');
     await api.post('/tasks', {
       message: inputar,
       status
     })
    window.location.reload();
   };
   
   return (
    <main className="App">
      <h1>Minha Lista de Tarefas</h1>
      <br></br>
  
      <section className="create-task">
        <form className="homeForm" onSubmit={ createTask }>
          <input
            value={ inputar }
            onChange={ ({ target }) => setInputar(target.value) }
            type="text"
            name="name"
            placeholder="Digite sua tarefa"
            id="texto-tarefa"
            className="texto-tarefa"
            maxLength="66"
            autocomplete="off"
          />
           <select
             name="select"
             value={status}
             onChange={ ({ target }) => setStatus(target.value) }>
             <option value="pendente">Pendente</option>
             <option value="andamento">Andamento</option>
             <option value="pronto">Pronto</option>
           </select>
           <button type="submit">Add</button>
           <button type="button" onClick={sortAlphabetical}>Ordem Alfabética</button>
         </form>
      </section>
      
      <ol id="lista-tarefas" className="olTasks">
        {allTask.map(
          ({ _id, message, status }) => (
          <li 
              id={_id}
              key={_id}
            >
            {`${message} - Status: ${status}`}
             <Functionalities
               id={_id}
               message={message}
              status={status}/>
          </li>
          )
        )}
      </ol>
  </main>
  );
}

export default Home;
