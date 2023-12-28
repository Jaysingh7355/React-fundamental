import { useState } from 'react';
import TodoList from './TodoList.';

function Todo(){
  
      const [todos, setNewTodos] = useState([]); 
      const[newTodo, setNewTodo] = useState("");

     return (
        <div>
        <input type='text' placeholder='New to do....'
          
         onChange={(event) => setNewTodo(event.target.value)}
        /><br/>
        
        <button onClick={() =>setNewTodos([...todos, newTodo]) }>Add todo</button> 
         <TodoList todos={todos}/>   
        </div>
    );
}

export default Todo;