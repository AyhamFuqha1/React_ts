
import { useState } from 'react';
import Navbar from './components/navbar';
import Navv from './components/Navv';
import Form from './components/form';
import Userdetails from './components/userdetails';
function App() {
  const company ="Home";
  const y="Target";
  const title="Welcome";
  const [login,setlogin]=useState(true);
  const [userdata,setuserdata] =useState({
    email:"",
    password:"",
    userName:"",
    address:"",
 });
  return (
    <>
    <Navbar compa={company} ays={y} loginn={login} setlogin={setlogin} />
    <Navv title={title}><span>❤</span><br /></Navv>
    {login?<Form sett={setlogin} userdata={userdata} setuserdata={setuserdata} />:<Userdetails  user={userdata} />}
   
  </>
  );
}

export default App
