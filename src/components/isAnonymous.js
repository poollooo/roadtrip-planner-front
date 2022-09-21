// src/components/IsAnon.js

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import PlaneLoading from "./PlaneLoading";

function IsAnon({ children }) {

    const { isLoggedIn, isLoading } = useContext(AuthContext);

    // If the authentication is still loading 
    if (isLoading) {
        return (
            <PlaneLoading text={"Authenticating you in"} />
        )
    }

    if (isLoggedIn) {
        // If the user is logged in, navigate to home page     
        return <Navigate to="/" />;
    } else {
        // If the user is not logged in, allow to see the page 
        return children;
    }
}

export default IsAnon;
