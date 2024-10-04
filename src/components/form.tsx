import { op } from "../interfacec/componant";
import {forminput}from "../data/index"
import { useState } from "react";


interface IPa{
    sett:(val:boolean)=>void;
    userdata:op;
    setuserdata:( user:op) => void;
        
}



const Form=({sett,userdata,setuserdata} :IPa)=>{
    const [inputarr,setinputarr]=useState(forminput);
 const onchane =(event:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=event.target;
    setuserdata({
        ...userdata,
        [name]:value,
    }) ;
 };
const ayham =inputarr.map((input,idx)=>(
    <div style={{ display :"flex", alignItems: "center"}} key={idx}>
    <div className="input-wrapper" >
    <label htmlFor={input.id} >{input.name}</label>
    <input type={input.type} name={input.name} id={input.id} value={userdata[input.name]}  onChange={onchane}></input>
  </div>
  <button onClick={()=>{
    const filterd=inputarr.filter(input =>input.name!=forminput[idx]["name"]);
    setinputarr(filterd); 
  }}>❌{idx}</button>
  </div>
))
    console.log(userdata);

    return(
        <form style={{
            margin:30,
        }} onSubmit={event=>{
               event.preventDefault();
        }}>
          {ayham};
            <button onClick={() =>
                sett(false) 
            } style={{
                backgroundColor:"black",
                color:"white",
            }}>LOGIN</button>
        </form>

    )

}
export default Form;