import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, userLogout } from "../../Config/Firebase";


function Navbar() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
     
    const Logout = ()=>{
        userLogout(user)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("🚀 ~ onAuthStateChanged ~ user:", user)
                setUser(user)
                // ...
            } else {
                setUser(null)
            }
        });
    }, [])

    return (
        <div style={{ background: 'bisque', }} >
            <nav>
                <h1>Navabar</h1>
                {user ?

               <h3>{user.email}</h3>
                :<button onClick={() => navigate('/Login')} >Login</button>
            }
                <button onClick={Logout}  >Logout</button>
                <button onClick={() => navigate('/Sell')}>+ sell</button>

            </nav><br />
        </div>
    )
}

export default Navbar;