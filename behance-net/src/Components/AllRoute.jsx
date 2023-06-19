import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import ForYou from "../Pages/Foryou"
import PrivateRoute from "./PrivateRoute"

const AllRoutes=()=>{

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/foryou" element={<PrivateRoute><ForYou/></PrivateRoute>}/>
        </Routes>
    )
}
export default AllRoutes