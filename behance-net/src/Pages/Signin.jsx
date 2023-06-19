import { Link } from "react-router-dom";
import styles from "./Signin.module.css"
import { HStack,Input,Button,VStack} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";


const Signin = () => {
    let [user,Setuser]=useState({
        email:"",
        password:""
      })

      let navigate=useNavigate()
      let {isAuth,login}=useContext(Authcontext)
      let [err,Seterr]=useState(false)

      let HandleChange=(e)=>{
        Setuser({...user,[e.target.name]:e.target.value})
      }

      let HandleformSubmit=(e)=>{
        e.preventDefault()
        if (user.email && user.password) {
      let HandleSubmit=async(email,password)=>{
      
        try {
          let res=await fetch(`http://localhost:8080/products`)
          let data=await res.json();
        console.log(data);

        // let user=data.find((user)=>
        // (user.email==email && user.password==password)
        // )

       let match= data.find((ele)=>{
            return ele.email==email && ele.password==password
          })
       
            console.log(match);
            Seterr(false)
          if(data){
            login(data)
          
          }
          
        } 
        catch (error) {
          console.log(error);
        }
    }
      HandleSubmit(user.email,user.password)
    }
    else{
    Seterr(true)
    }
      
      
    }
        if(isAuth){
            navigate("/foryou")
        }

    return (
      <div>
        <div style={{ backgroundImage: "url('https://auth.services.adobe.com/img/canvas/Fotolia_245585448_XL.jpg')" ,width:"100%",height:"630px"}}>
          {/* Your content here */}
          <div className={styles.logo}>

            <img src="https://static.adobelogin.com/clients/behance-2020/4x_b431ffdf8fed1c95074548ecb9d4920e.png"/> 
            <h1 style={{color:"white"}}>Behance</h1>
          </div>
          <div className={styles.input}>
            <div style={{position:"relative",top:"40px"}}>
                
                <h1 style={{marginLeft:"7px",marginTop:"15px"}}>Sign in</h1>
                </div>
                <div style={{marginTop:"30px",marginLeft:"7px",}}>
               
                <p>New user? <Link to="/signup"><span style={{color:"#1473e6"}}>Create an account</span></Link></p>
            </div>
            
            <div>
                <form action="">
               
                <Input required="@hbhjbhj" type="email" name="email" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="email address" value={user.email} onChange={HandleChange}/>
                <Input type="password" name="password" variant='flushed' w='370px' mt="15px" ml="5px" placeholder="Password" value={user.password} onChange={HandleChange}/>
                <br />
                <Button variant="primary"  bg="#277BE9" color="white" borderRadius="1.5em" width="7.5vw" height="2.7vw" mt="25px" ml="280px" onClick={HandleformSubmit}>Continue</Button>
                </form>
            </div>
            <div className={styles.hr}>
               <hr />
               <span>or</span>
               <div>
               <hr className={styles.hr2}/>
               </div>
            </div>
                <VStack spacing="1"  ml="-120px" mt="20px">      
                    <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZBdB0NcrWNlzdXQCMSs9qEdNi-lRty88veNsiRBV&s" alt="" width="16px" style={{marginLeft:"43px",marginTop:"10px"}}/><p style={{color:"black",position:"relative",bottom:"21px",left:"10px"}}>Continue with Google</p></button>
                    <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://th.bing.com/th?id=OIP.9g4dkKVAUyciOuDI9_vEYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="30px" style={{marginLeft:"39px",marginTop:"2px"}}/><p style={{color:"black",position:"relative",bottom:"27px",left:"6px"}}>Continue with Apple</p></button>
                    <button style={{marginTop:"6px",width:"21vw", height:"3vw",backgroundColor:"white",borderRadius:"1em",border:'1px solid rgb(177, 170, 170)'}}><img src="https://th.bing.com/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" width="16px" style={{marginLeft:"45px",marginTop:"10px"}}/><p style={{color:"black",position:"relative",bottom:"21px",left:"18px"}}>Continue with Facebook</p></button>
                   
       </VStack> 
      
           
          
          </div>
        </div>
      </div>
    );
  };
  
  export default Signin;
  