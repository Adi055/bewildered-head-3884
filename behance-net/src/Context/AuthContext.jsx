import { createContext, useState } from "react"

export let Authcontext=createContext()

let AuthContextProvider=(props)=>{
    let [isAuth,Setauth]=useState(false)

    let login=()=>{
        Setauth(true)
    }

    let logout=()=>{
        Setauth(false)
    }

    return (
        <Authcontext.Provider value={{isAuth,login,logout}}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default AuthContextProvider