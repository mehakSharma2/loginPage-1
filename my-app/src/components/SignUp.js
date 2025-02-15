import React, { useState } from "react";
import image from './image.png';
import { Link} from "react-router-dom";

export default function SignUp() {
  const [loginInfo, setLoginInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSign = async (e) => {
    e.preventDefault();
    const { name, email, password } = loginInfo;

    if (!name || !email || !password) {
      setError("All fields are required.");
      setSuccess(""); 
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setSuccess("");
      return;
    }

    setError("");
    
    try {
      const url = "https://my-app-n2jt.onrender.com/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
      });

      if (response.ok) {
        setSuccess("Signup successful! Redirecting to homepage...");
        window.alert("Signup successful! Redirecting to homepage...");
        setTimeout(() => {
          window.location.href = "https://universityinsights.in/";
        }, 1000);
      } else {
        const res = await response.json();
        setError(res.error || "Signup failed.");
        setSuccess("");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="bg-slate-400 h-3/4 w-4/5 shadow-2xl rounded-2x flex">
      <div className="w-1/2 p-8">
        <form className="max-w-sm mx-auto" onSubmit={handleSign}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm my-5 px-5 py-2.5 text-center"
          >
            Register new account
          </button>
          <div>
            <Link to="/login" className="text-white hover:text-blue-700 hover:underline text-sm">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img src={image} className="h-[450px] w-[480px]" alt="Signup" />
      </div>
    </div>
  );
}
