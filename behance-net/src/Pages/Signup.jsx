import { Link } from "react-router-dom";
import styles from "./Signup.module.css"
import { HStack,Input,Button} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let init={
  username:"",
  password:"",
  email:""
}
const Signup = () => {
    let [user,Setuser]=useState(init)
    let [err,Seterr]=useState(false)
    let navigate=useNavigate()

    let HandleChange=(e)=>{
        Setuser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value);
    }

    let HandleSubmit=(e)=>{
      e.preventDefault()
      if (user.username && user.password && user.email){
      let details={
        username:user.username,
        password:user.password,
        email:user.email
      }

      fetch(`http://localhost:8080/products`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(details)
      })
      .then((res) => {
       
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        Seterr(false)
        navigate("/signin")
      })
      .catch((err)=>{
        console.log(err);
      })
      
    }
    else{
      Seterr(true)
    }

    Setuser(init)
    }

    return (
      <div>
        <div style={{ backgroundImage: "url('https://auth.services.adobe.com/img/canvas/Fotolia_200977622_XL.jpg')" ,width:"100%",height:"630px"}}>
          {/* Your content here */}
         
          <div className={styles.logo}>

            <img src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"/> 
            <h1 style={{color:"white"}}>Behance</h1>
          </div>
          <div className={styles.input}>
         
            <div>
                <p>Step 1 of 2</p>
                <h1>Create an account</h1>
                </div>
                <HStack spacing="1"  ml="10px" mt="20px">      
                    <button style={{marginTop:"6px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBdB0NcrWNlzdXQCMSs9qEdNi-lRty88veNsiRBV&s" alt="" width="40px"/></button>
                    <button><img src="https://th.bing.com/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="70px"/></button>
                    <button><img src="https://th.bing.com/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="40px"/></button>            
       </HStack> 
       <div className={styles.hr}>
               <hr />
               <span>or</span>
               <div>
               <hr className={styles.hr2}/>
               </div>
            </div>
            <div style={{marginTop:"30px",marginLeft:"7px"}}>
                <p style={{color:"black"}}>Sign up with email</p>
                <p>Already have an account? <Link to="/signin"><span style={{color:"#1473e6"}}>Sign in</span></Link></p>
            </div>
            {err&& <p style={{color:"red",marginLeft:"57px",marginTop:"30px"}}>Please fill in all fields</p>}
            <div>
                <form action="" >
                <Input variant='flushed' w='370px' mt="15px" ml="5px" placeholder="username" name="username" value={user.username} onChange={HandleChange}/>
                <Input required="@" type="email" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="email address" name="email" value={user.email} onChange={HandleChange}/>
                <Input type="password" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="Password" name="password" value={user.password} onChange={HandleChange}/>
                <br />
                <Button variant="primary"  bg="#277BE9" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw" mt="25px" ml="280px" onClick={HandleSubmit}>Continue</Button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  