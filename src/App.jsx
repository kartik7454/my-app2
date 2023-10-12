import Task from "./Tasks";
import { useState } from "react";

import { useReducer } from "react";
var bye = [];

function App() {
  const [visability, setvisability] = useState(false);
  const [cart, setcart] = useReducer((x) => x + 1, 0);
  

  async function addtask() {
    const value = document.getElementsByClassName("textval");
    var alo = value[0];
    var aid = alo.value;
    bye.push(aid);
    alo.value = ""

    await setcart();
  }

  async function deletenote (id ){

    bye =bye.filter((item ,index )=>{ 
      return index !== id})
    
    await setcart();
    
  }

  async function checked (id ){

     var item = document.getElementById(id)
    item.classList.toggle("checked")
    
            
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      
       
      <div >
       
        
        <input type="text" className="textval"></input>
        
        <button className="addtaskbtn"
          onClick={() => {
            addtask();
          }}
        >
          add task{" "}
        </button>
      </div>

      <div className="container">
        
        {bye.map((item,index)=> {
          return <Task
           value={item}
           id={index} 
           delnote = {deletenote}
           check={checked}
           />;
           
          },
          [cart]
        )}
      </div>

      
    </div>
  );
}

export default App;
