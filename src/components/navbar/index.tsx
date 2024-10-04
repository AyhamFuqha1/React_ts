
import './index.scss'



const styles={
    list:{
            border: "1px solid red",
            listStyle: "none",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            //backgroundColor : "purple",
            padding: 10,
            margin:20,       
    },
    listItem:{
        color:"white",        
        textDecoration:"none",
    },
    listIte:{
        backgroundColor:"black",
        color:"white",       
        textDecoration:"none",
    }
}

interface gry{
    compa:string,
    ays:string,
    loginn:boolean,
    setlogin:(val:boolean) => void
}
const Navbar = ({compa,ays,loginn,setlogin}: gry) =>{
    //const [login,setlogin]=useState("login");
    return <nav>
    <ul className='navbar-list' style={styles.list}>
    <li><a href="/" style={styles.listItem}>{compa.toUpperCase()}</a></li>
    <li><a href="/" style={styles.listItem}>{ays.toUpperCase()}</a></li>
    <li><a href="/" style={styles.listItem}>Contact</a></li>
    <li><button onClick={()=>{
         setlogin( !loginn);
    }
    } style={styles.listIte}>{loginn?"Login":"Logout"}</button></li>
    </ul>
    </nav>
};

export default Navbar;