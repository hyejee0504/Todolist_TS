/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
export  interface Iprops {
    todovalues: string
  }

export default function Todolist(props: Iprops) {
    const [todoArr, setTodoArr] = useState<string[]>([]);

    useEffect(() => {
        setTodoArr(todoArr => [...todoArr, props.todovalues]);
    }, [props.todovalues])

  return (
    <ul>
        {todoArr.length > 0 ?
        todoArr.map((value, index) => {
            if(value !== ""){
                return <li key={index+1}>{value}</li>
            }
        }) : null}
    </ul>
  )
}
