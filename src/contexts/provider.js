import { createContext, useContext, useEffect, useState } from "react";

export const userContext = createContext()

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        name: 'eric',
    })

    useEffect(() => {
       const userStorage = localStorage.getItem("user")
       if (userStorage){
        setUser(userStorage)
       } else {
        setUser({
            name: '',
        })
       }
    }, [])

    const [login, setLogin] = useState(false)

    return (
        <userContext.Provider value={{user, setUser , login, setLogin}}>
            {children}
        </userContext.Provider>
    )
}

export const useCon = () => useContext(userContext)