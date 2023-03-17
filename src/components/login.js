import React, { useState } from "react";
import { useCon } from "../contexts/provider";

const Login = () => {
    const { setUser} = useCon()
    const {input, setInput} = useState({
        name: '',
    })
   

    const handleLogin = () => {
        localStorage.setItem("user", JSON.stringify(input))
        setUser(input)
    }

    const handleLogout = () => {
        localStorage.removeItem("user", JSON.stringify(input))
        setUser({
            name: '',
        })
    }

    return (
        <div>
            <input type="text" onChange={(e) => setInput({name: e.target.value})}></input>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Login