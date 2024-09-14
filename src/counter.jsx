import { useSelector } from "react-redux"

export const Counter=()=>{
    const count =useSelector(state=>state.cntSlice.cnt)
return<h1> count is: {count}</h1>
}