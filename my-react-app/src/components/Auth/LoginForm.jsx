import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import Videoimage from '../../assets/images/intro-coffee.mp4';
import Logo from '../../assets/images/logo.png';

const LoginForm = () => {
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [message, setmessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        setmessage("Logged in successfully!");
        navigate('/');
      } else {
        setmessage(data.error || "Login failed");
      }
    } catch (error) {
      setmessage("Server Error");
    }
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden m-0 p-0 flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover"
      >
        <source src={Videoimage} type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative z-10 bg-white/15 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">
        <div className="flex flex-col items-center mb-6">
          <img
            src={Logo}
            alt="Brand Logo"
            className="w-[90px] h-[90px] mb-3 rounded-full shadow-md"
          />
          <h1 className="text-3xl font-extrabold text-[wheat] tracking-wide drop-shadow-lg">
            Beans & Bliss
          </h1>
          <h2 className="text-xl font-semibold text-[wheat] mt-2">
            Welcome Back
          </h2>
        </div>

        <form onSubmit={handlesubmit} className="space-y-4">
          <input
            className="w-full border  text-center border-gray-200 p-[5px] rounded-[20px] bg-[beige] placeholder-gray-600 focus:ring-2 focus:ring-amber-500 outline-none transition"
            required
            type="email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
            placeholder="Email"
          />
          <input
            className="w-full text-center border border-gray-200 p-[5px] rounded-[20px] bg-[beige] placeholder-gray-600 focus:ring-2 focus:ring-amber-500 outline-none transition"
            required
            type="password"
            name="password"
            value={formdata.password}
            onChange={handlechange}
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full text-center bg-amber-700 hover:bg-amber-800 text-white font-semibold p-[5px] rounded-[20px] transition transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-white font-medium">{message}</p>
        )}

        <div className="mt-5 text-sm text-white">
          <a href="/forgot-password" className="text-amber-400 hover:underline">
            Forgot Password?
          </a>
          <p className="mt-2 text-[wheat]">
            New Here?{" "}
            <a href="/signup" className="text-amber-400 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
