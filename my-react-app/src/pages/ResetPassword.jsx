import React from 'react'

export const ResetPassword = () => {
    const {token}=useParams();
    const [password, setpassword] = useState("")
    const [msg, setmsg] = useState("");
    const handlesbmit=async (e) => {
        e.preventDefault();
        try {
            await post(`/reset-password/${token}`,{password});
            setmsg("Password has been reset successfully");
        } catch (error) {
            setmsg(error.message || "Error reseting password");
        }
    };



  return (
    <div>
        <form onSubmit={handlesbmit}>
            <input placeholder='New Password' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button type='submit'>Reset Password</button>
        </form>
        <p>{msg}</p>
    </div>
  )
}
