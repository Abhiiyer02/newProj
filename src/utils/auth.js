import { useState,useContext,createContext } from "react";

// import {  } from "react";
const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const login = user =>{
        setUser(user)
    }
    const logout = user =>{
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
            {/* <AuthContext.Consumer>
                {value => {
                    return value
                }}
            </AuthContext.Consumer> */}
        </AuthContext.Provider>
    )

}
export const useAuth = () => {
    return useContext(AuthContext)
}