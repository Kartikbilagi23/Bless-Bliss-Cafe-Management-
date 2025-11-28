import React from 'react'
import { useState } from 'react';
export const ForgotPassword = () => {
    const [email, setemail] = useState("");
    const [msg, setmsg] = useState("");
    const handleSubmit=async (e)=>{
        e.preventDafault();
        try {
            await post("/forgot-password",{email});
            alert("if this email exists,a reset link has been sent");
        } catch (error) {
            alert(error.message || "Error sending reset email");
        }
    }
  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        <button type='submit'>Send Reset Link</button>
      </form>
      <p>{msg}</p>
    </div>
  )
};
