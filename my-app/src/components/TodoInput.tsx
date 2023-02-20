import {useRef, useState} from 'react';
export  interface Iprops {
    changeTodovalue: (x : string) => void
  }

export default function TodoInput(props: Iprops) {
    const [todoinput, setTodoinput] = useState("");
    const ref = useRef<HTMLInputElement>(null);

    const handletodolist = () => {
        props.changeTodovalue(todoinput);
        if(ref.current){
          ref.current.value = "";
        }
    }
    const handlechangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoinput(e.target.value);
        // e.target.value = 
    }
  return (
    <>
        <input type="text" ref={ref} onChange={handlechangeinput} />
        <button onClick={handletodolist}>입력</button>
    </>
  )
}
