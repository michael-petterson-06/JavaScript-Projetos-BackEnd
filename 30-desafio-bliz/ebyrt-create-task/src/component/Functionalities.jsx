import inconDelete from '../image/inconDelete.png';
import edit from '../image/edit.png';
import axios from 'axios';
import history from '../history';

function Functionalities({id, message, status}) {
   const api = axios.create({
      baseURL: 'http://localhost:3001'
   })

  const editTasks = async (e) => {
    
    const statusElement = e.target.parentNode.id
    const message = e.target.name
   
    history.push({
      pathname:'/Edit',
      id: id,
      msg: message,
      status: statusElement
    });
  }
        
  const deleteTasks = async(e) => {
    await api.delete(`/tasks/${id}`)
    alert('Deleta com Sucesso');
    window.location.reload()
  }

   return (
    <div className="containerImgs avoImgs" >
      <section>
        <div id={status} className="containerImgs paiImgs" >
          <img onClick={ editTasks } id={id} name={message} className='formatImage' src={ edit } alt="Editar"/>
        </div>                 
        <div className="containerImgs paiImgs" > 
          <img onClick={ deleteTasks } id={id} className='formatImage' src={inconDelete} alt="Deletar"/>
        </div>                 
    </section>
    </div>
    )
}

export default Functionalities;
