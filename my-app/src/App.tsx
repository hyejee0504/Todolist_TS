import React, { useState } from 'react';
import Todolist from './components/Todolist';
import TodoInput from './components/TodoInput';

export  interface Iprops {
  changeTodovalue: (x : string) => void;
  todovalues: string
}

function App() {
 
  const [todovalue, setTodovalue] = useState<string>("");

  const changetodoinput = (x: string) :void=> {
    setTodovalue(x);
  }


  return (
    <>
      <TodoInput changeTodovalue={changetodoinput}/>
      <Todolist todovalues={todovalue}/>
    </>
  );
}

export default App;
