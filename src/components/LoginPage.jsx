// src/pages/LoginPage.js

import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const API_URL = "http://localhost:3003/api";


function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { username, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response) => {
                // Request to the server's endpoint `/auth/login` returns a response
                // with the JWT string ->  response.data.authToken
                console.log('The user JWT token is :', response.data);

                // Store the JWT token in the browser's localStorage
                storeToken(response.data);
                // Verify the token by sending a request 
                // to the server's JWT validation endpoint.
                authenticateUser();

                // Navigate back to the home page after success login
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data;
                setErrorMessage(errorDescription);
            })
    };

    return (
        <div className="LoginPage">
            <h1>Login</h1>

            <form onSubmit={handleLoginSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    name="Username"
                    value={username}
                    onChange={handleUsername}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
        </div>
    )
}

export default LoginPage;
