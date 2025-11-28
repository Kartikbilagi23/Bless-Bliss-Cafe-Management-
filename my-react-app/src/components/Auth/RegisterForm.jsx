import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Authcontext';

const RegisterForm = () => {
  const [formdata, setformdata] = useState({ name: "", email: "", password: "" });
  const [message, setmessage] = useState("");
  const { login } = useContext(AuthContext);

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setmessage("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (res.ok) {
        setmessage("✅ Registration successful! Please log in.");
        setformdata({ name: "", email: "", password: "" });
      } else {
        setmessage(data.error || "Registration failed");
      }
    } catch (error) {
      setmessage("Server Error");
    }
  };

  return (
    <div className='max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-8'>
      <h2 className='text-2xl font-bold text-center text-amber-800 mb-4'>Create Account</h2>
      <form onSubmit={handlesubmit} className='space-y-4'>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handlechange}
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handlechange}
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-amber-700 text-white py-2 px-6 rounded w-full hover:bg-amber-800"
        >
          Register
        </button>
      </form>
      {message && <p className='mt-3 text-center text-gray-600'>{message}</p>}
    </div>
  );
};

export default RegisterForm;
