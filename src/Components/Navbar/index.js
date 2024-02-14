import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, userLogout } from "../../Config/Firebase";
import olx from "../../assest/olx.svg";
import olxTop from "../../assest/olx top.svg";
import car from "../../assest/car-front.svg";
import building from "../../assest/building.svg";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const Logout = () => {
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
        <>
            <header className="main-header">
                <div className="hamburger-menu">

                    <a href="#">
                        <GiHamburgerMenu/>
                    </a>
                </div>
                <div className="logos">
                    <img style={{
                        width: '65%'
                    }} src={olxTop} />
                </div>
                <div className="car">
                    <img style={{
                        width: '15%'
                    }} src={car} />
                    <p>MOTORS</p>
                </div>
                <div className="building">
                    <img style={{
                        width: '15%'
                    }} src={building} />
                    <p>PROPERTY</p>
                </div>
            </header>
            <nav className="main-nav">
                
                {/* 1st logo */}
                
                <div className="logo">
                    <img style={{
                        width: '100%'
                    }} src={olx} />
                </div>
                
                {/* Search Bar */}

                <div className="place-holder">
                    <input placeholder="Pakistan" />
                </div>

                <div className="place-holder2">
                    <input placeholder="Fine Car,Mobile Phone And More..." />
                </div>

                {/* buttons icons */}

                <div className={"menu-link"}>
                    {user ?
                        <h3>{user.email}</h3> :
                        <button className="btn1" onClick={() => navigate('/Login')} ><u>login</u></button>
                    }
                    {user ?
                        <button onClick={Logout}  >Logout</button> : null

                    }
                    <button className="btn1" onClick={() => navigate('/Sell')}>+sell</button>

                </div>
            </nav>
        </>
    )
}

export default Navbar;
