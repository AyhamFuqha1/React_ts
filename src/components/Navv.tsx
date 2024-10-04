import {  ReactNode } from "react";

const Navv = (pr:{title:string;children:ReactNode})=>{
    
    return <h2 style={{fontSize:40,textAlign:"center"}}>{pr.title}
    {pr.children}</h2>
};
export default Navv;