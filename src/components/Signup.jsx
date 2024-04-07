import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://bb7c-14-139-241-214.ngrok-free.app/api/v1/register",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.log("error in posting", error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 h-full bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col justify-center items-center">
        <form className="w-11/12 lg:w-3/4 p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Signup</h2>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Username:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Choose your username"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <Link to="/">
              <p className="mt-3 font-bold text-gray-700">
                Already logged in? Go to Login
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

export default Signup;
