import React from 'react'
import { useState } from 'react';
export const Signup = () => {
    const [form, setform] = useState({name:"",email:"",password:""})
    const [msg, setmsg] = useState("")

    const handlesubmit=async (e)=>{
        e.preventDefault();
        try {
            await post("/register",form);
            setmsg("Account created successfully! u can login");
        } catch (error) {
            setmsg(error.message || "Error creating account");
        }
    };
  return (
    <div>
        <h2>Signup</h2>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Name' value={form.name} onChange={(e)=>setform({...form,name:e.target.value})}/>
            <input type="text" placeholder='Email' value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} />
            <input type="Password" placeholder='password' value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} />
            <button type='submit'>Sign up</button>
        </form>
        <p>{msg}</p>
    </div>
  )
};
