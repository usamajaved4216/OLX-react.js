import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../Config/Firebase";

function RegisterPage() {
    const navigate = useNavigate()
    const [fullname, setFullName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function HandleRegisterBtn() {
        try {
            await Register({ fullname, age, email, password }).then((res) => {
                console.log("🚀 ~ awaitRegister ~ res:", res)
                if (res && res.user) {
                    navigate('/Login')
                }
            })

        } catch (e) {
            console.log("🚀 ~ HandleRegisterBtn ~ e:", e)

        }
    }

    return (
        <div>
            <h1>Login SignUp Page </h1>
            <input placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} /><br />
            <input placeholder="Age" onChange={(e) => setAge(e.target.value)} /><br />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <button onClick={HandleRegisterBtn} >Register</button><br />
            <p>
                don't you have an account.
                <span onClick={() => navigate('/Login')} style={{ color: 'blue' }} > Login</span>
            </p>
        </div>
    )
}

export default RegisterPage;