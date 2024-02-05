import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Login } from "../../Config/Firebase";
import olx from '../../assest/ulx.svg'



function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    async function HandleLoginBtn() {
        try {
            await Login({ email, password }).then((res) => {
                console.log("🚀 ~ Login ~ res:", res)

                if (res && res.user) {
                    navigate('/')
                }

            })
        } catch (e) {
            console.log("🚀 ~ HandleLoginBtn ~ e:", e)

        }
    }



    return (




        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px' }}>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <img style={{ width: '40px', }} src={olx} >
                    </img>
                    <h2 style={{ marginLeft: '10px' }} >OLX Login Page</h2>
                </div>
                <p style={{ display: "flex", marginLeft: '15px' }} >Email</p>
                <input style={{ width: '90%', height: '30px', border: 'none', paddingLeft:10 }} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <p style={{ display: "flex", marginLeft: '15px' }} >Password</p>
                <input style={{ width: '90%', height: '30px', border: 'none', paddingLeft:10 }} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <p style={{ display: "flex", marginLeft: '15px' }} >Forgotten Password</p>
                <button onClick={HandleLoginBtn} style={{ width: '90%', height: '30px', border: 'none', background: '#002F34', color: 'white', cursor: "pointer" }} >Login</button>
                <p>Don't You Have An Account</p>
                <button onClick={() => navigate('/Register')}>Register</button>

            </div>
        </div>




    )
}

export default LoginPage;