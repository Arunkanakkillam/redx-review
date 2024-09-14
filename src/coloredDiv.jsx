import { useSelector } from "react-redux"


export const DvClr=()=>{
    const count=useSelector((state)=>state.cntSlice.cnt)
    console.log(count)
    return <div style={{width:"200px",height:"300px",background:count%2==0? "blue":"green"}}></div>
}