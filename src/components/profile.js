import React from "react";
import { useCon } from "../contexts/provider";

const Profile = () => {
    const {user} = useCon()

    return(
        <div>
            <p>Profile</p>
            <h1>{user.name}</h1>
        </div>
    )
}

export default Profile