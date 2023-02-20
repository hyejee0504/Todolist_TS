/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
export  interface Iprops {
    todovalues: string
  }

export default function Todolist(props: Iprops) {
    const [todoArr, setTodoArr] = useState<string[]>([]);
    let arr: string[] = [];

    const handledelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();    
        todoArr.map(value => {
            if(value !== e.currentTarget.parentElement?.innerText.slice(0, -1)){
            arr.push(value);
        }})
        setTodoArr(arr)        
    }

    useEffect(() => {
        setTodoArr(todoArr => [...todoArr, props.todovalues]);
    }, [props.todovalues])

  return (
    <ul>
        {todoArr.length > 0 ?
        todoArr.map((value, index) => {
            if(value !== ""){
                return <li key={index+1}><input type="checkbox" />{value}
                <button onClick={handledelete}>x</button>
                </li>
            }
        }) : null}
    </ul>
  )
}
