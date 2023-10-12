
import './App.css';

function Task(props) {
  return (
    <div className="task " >
      <input type="checkbox" className="checkbox " onClick={  ()=> props.check(props.id)} ></input>
      <p className="value " id ={props.id}> {props.value}</p>
    <button className='delbtn' onClick={  ()=> props.delnote(props.id)}>X</button>
    </div>
  );
}

export default Task;
