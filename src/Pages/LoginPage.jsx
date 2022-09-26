import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ORIGIN } from "../utils/const";

const API_URL = `${ORIGIN}`;

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

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken

        // Store the JWT token in the browser's localStorage
        localStorage.setItem("user", requestBody.username);
        storeToken(response.data);
        // Verify the token by sending a request
        // to the server's JWT validation endpoint.
        authenticateUser();

        // Navigate back to the home page after success login
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex flex-col items-center text-center bg-gray-50 shadow-lg rounded-lg mx-48">
      <h1 className="text-3xl font-bold pt-8">
        Welcome back !
        <br />
        <span className="text-lg font-normal">
          Log back in to start planning your next adventure
        </span>
      </h1>
      <form
        className="flex flex-col py-8 gap-8 mx-48"
        onSubmit={handleLoginSubmit}
      >
        <div className="flex flex-row justify-between items-center outline-none gap-8">
          <label className="w-24 text-left">Username:</label>
          <input
            type="text"
            name="Username"
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
        <button
          type="submit"
          className="h-12 hover:text-green-pine hover:bg-white hover:border-2 border-2 border-green-pine hover:border-green-pine text-xl bg-green-pine rounded-lg text-white "
        >
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="flex flex-row gap-2 pt-4 pb-8">
        <p className="text-md">Don't have an account yet?</p>
        <Link className="hover:text-green-pine text-md" to={"/signup"}>
          {" "}
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
