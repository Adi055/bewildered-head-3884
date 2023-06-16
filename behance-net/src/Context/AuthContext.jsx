import { createContext } from "react"

export let Authcontext=createContext()

let AuthContextProvider=(props)=>{

    return (
        <Authcontext.Provider>
            {props.children}
        </Authcontext.Provider>
    )
}
export default AuthContextProvider