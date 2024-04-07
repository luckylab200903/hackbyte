import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Corrected to camelCase
  const [password, setPassword] = useState(""); // Corrected to camelCase

  const getCSRFToken = () => {
    if (typeof document !== "undefined") {
      const cookieValue = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("csrftoken="))
        ?.split("=")[1];
      return cookieValue;
    }
    return null;
  };

  const csrfToken = getCSRFToken();
  axios.defaults.headers.common["X-CSRFToken"] = csrfToken;

  const handleSubmit = async () => {
    // Corrected to camelCase
    try {
      // Construct FormData object
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      // Using Axios for the POST request
      const response = await axios.post(
        "https://bb7c-14-139-241-214.ngrok-free.app/api/v1/login",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      if (response.status === 200) {
        console.log("====================================");
        console.log(response.status);
        console.log("====================================");
        navigate("/home");
      }

      // Handle response
      console.log("response from backend", response.body);
    } catch (error) {
      // Handle error
      console.log("error in posting", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 h-full flex flex-col bg-gradient-to-r from-yellow-600 to-yellow-700 justify-center items-center">
        <form className="w-11/12 lg:w-3/4 p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Corrected to camelCase
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Corrected to camelCase
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="button"
              onClick={handleSubmit} // Corrected to camelCase
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            <Link to="/signup">
              <p className="mt-3 font-bold text-gray-700">
                New user? Signup Now
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 h-full bg-green-300 hidden lg:flex justify-center items-center">
        <img
          src="../../images/image1.jpg"
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Login;
