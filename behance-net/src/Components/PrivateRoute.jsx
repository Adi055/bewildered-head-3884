import { Navigate } from "react-router-dom"
import { Authcontext } from "../Context/AuthContext"
import { useContext } from "react"

const PrivateRoute=(props)=>{
let {isAuth}=useContext(Authcontext)

if(!isAuth){
    return <Navigate to="/signin"/>
}
    return props.children
}
export default PrivateRoute