// src/pages/SignupPage.js

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { ORIGIN } from "../utils/const"

const API_URL = `${ORIGIN}`


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, username, password };

        // Make an axios request to the API
        // If POST request is successful redirect to main page
        // If the request resolves with an error, set the error message in the state
        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then(async (response) => {
                // Store the JWT token in the browser's localStorage
                localStorage.setItem("user", requestBody.username);
                storeToken(response.data.token);

                // Verify the token by sending a request 
                // to the server's JWT validation endpoint.
                await authenticateUser();
                navigate('/');
            })
            .catch((error) => {
                console.log(error)
            })
    };


    return (
        <div className="flex flex-col items-center text-center bg-gray-50 shadow-lg rounded-lg mx-48">
            <h1 className="text-3xl font-bold pt-8">Welcome on Roadtrip Planner !
                <br />
                <span className="text-lg font-normal">Create an account to start planning your next adventure</span>
            </h1>
            <form className="flex flex-col py-8 gap-8 mx-48" onSubmit={handleSignupSubmit}>
                <div className="flex flex-row justify-between items-center outline-none gap-8">
                    <label className="w-24 text-left">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                        className="border-2 border-gray-300 w-[15vw] rounded-lg px-4 py-2 focus:outline-none focus:border-green-pine"
                    />
                </div>
                <div className="flex flex-row justify-between items-center outline-none gap-8">
                    <label className="w-24 text-left">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsername}
                        className="border-2 border-gray-300 w-[15vw] rounded-lg px-4 py-2 focus:outline-none focus:border-green-pine"
                    />
                </div>
                <div className="flex flex-row justify-between items-center outline-none gap-8">
                    <label className="w-24 text-left">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                        className="border-2 border-gray-300 w-[15vw] rounded-lg px-4 py-2 focus:outline-none focus:border-green-pine"
                    />
                </div>
                <button type="submit" className="h-12 hover:text-green-pine hover:bg-white hover:border-2 border-2 border-green-pine hover:border-green-pine text-xl bg-green-pine rounded-lg text-white ">
                    <p className="flex justify-center items-around">
                        Sign up
                    </p>
                </button>
            </form>
            <div className="flex flex-row gap-2 pt-4 pb-8">
                <p className="text-md">Already have an account?</p>
                <Link className="hover:text-green-pine text-md" to={"/login"}> Login</Link>
            </div>
        </div>
    )
}

export default SignupPage;
