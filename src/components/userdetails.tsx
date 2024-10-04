import { op } from "../interfacec/componant";

interface userdata{user:op
}
const Userdetails =({user}:userdata)=>{
    return(
        <div>
         <h3>username: {user.userName}</h3><br />
         <h3>email: {user.email}</h3><br />
         <h3>password: {user.password}</h3><br />   
         <h3>Address: {user.address}</h3>
        </div>
    )
}

export default Userdetails;