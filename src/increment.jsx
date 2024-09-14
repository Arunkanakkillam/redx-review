import { useDispatch } from "react-redux"
import { increment } from "./countSlice"

export const Inc=()=>{
    const dispatch=useDispatch()

    return<button onClick={()=>dispatch(increment())}>
        click me
    </button>
}