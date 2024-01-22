import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../Config/Firebase";


function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] =useState()
    const [password, setPassword] =useState()


    
function HandleLoginBtn() {
Login ({email, password})
}


    return (
        <div>
            <h1>Login SignIn Page </h1>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
            <button onClick={HandleLoginBtn} >Login</button><br/>
            <p>
                don't you have an account.
            <span onClick={() => navigate('/Register')} style={{color:'blue'}} > Register</span>
            </p>
        </div>
    )
}

export default LoginPage;