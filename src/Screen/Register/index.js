import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../../Config/Firebase";
import olx from '../../assest/ulx.svg'


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
        
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ background: 'rgb(240, 235, 235)', width: '90%', maxWidth: '400px', textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
    <div style={{display:"flex", justifyContent:'center'}}>
         <img style={{width:'40px',}} src={olx} >
          </img>
        <h2 style={{marginLeft:'10px'}} >OLX Login Page</h2>
        </div>
      <input style={{ width: '100%', height: '30px', border: 'none', margin: '10px 0' }} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} />
      <input style={{ width: '100%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input style={{ width: '100%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input style={{ width: '100%', height: '30px', border: 'none',  margin: '10px 0' }} placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button onClick={HandleRegisterBtn} style={{ width: '100%', height: '30px', border: 'none', background: 'rgb(51, 47, 122)', color: 'white',  }}  >Create Account</button>
      <p>
        Already Have An Account.
        <span onClick={() => navigate('/Login')}  ><a style={{color:'blue'}}>SignIn</a></span>
      </p>
    </div>
  </div>



    )
}

export default RegisterPage;