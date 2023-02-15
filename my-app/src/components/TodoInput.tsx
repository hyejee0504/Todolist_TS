import {useState} from 'react';
export  interface Iprops {
    changeTodovalue: (x : string) => void
  }

export default function TodoInput(props: Iprops) {
    const [todoinput, setTodoinput] = useState("");

    const handletodolist = () => {
        props.changeTodovalue(todoinput)
    }
    const handlechangeinput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoinput(e.target.value);
    }
  return (
    <>
        <input type="text" onChange={handlechangeinput} />
        <button onClick={handletodolist}>입력</button>
    </>
  )
}
