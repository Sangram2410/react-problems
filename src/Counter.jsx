import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset } from "./features/counterslice"
const Counter = () => {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter;