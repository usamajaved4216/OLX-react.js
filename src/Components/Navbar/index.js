import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, userLogout } from "../../Config/Firebase";
import TopOlx from '../../assest/olx top.svg'
import TopCar from '../../assest/car-front.svg'
import TopBuilding from '../../assest/building.svg'
import BottomOlx from '../../assest/olx.svg'
import sellicon from '../../assest/sellicon.svg'




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
        <div className="usama" style={{marginBottom:'10%'}}>
            {/* <div style={{ height: '10rem' }} /> */}

            <div style={{ position:'fixed', top:0, width:'100%'}} >
                <header style={{ background: 'rgb(239, 236, 236)' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
                        <img style={{ width: '40px', padding: '0px 30px' }} src={TopOlx} ></img>
                        <img style={{ padding: '0px 4px 0px 0px' }} src={TopCar} ></img>
                        <a style={{ padding: '12px 20px 0px 0px' }}>MOTORS</a>
                        <img style={{ padding: '0px 4px 0px 0px' }} src={TopBuilding} ></img>
                        <a style={{ padding: '12px 1px 0px 0px' }}>PROPERTY</a>
                        <button onClick={Logout}  >Logout</button>

                    </div>
                </header>
                <nav style={{ background: 'rgb(239, 236, 236)', display: 'flex', justifyContent: 'flex-start' }} className='BottomNavbar' >

                    <img className='mediaremove' style={{ width: '80px', padding: '0px 20px' }} src={BottomOlx} ></img>
                    <input className='inp' style={{
                        width: '15rem',
                        height: '40px',
                        margin: '12px 10px 0px 0px',
                        border: '2px solid black',
                        borderRadius: '5px'
                    }} placeholder='Pakistan' ></input>
                    <input className='Inp' style={{ width: '45rem', height: '40px', margin: '12px 0px 0px 0px', border: '2px solid black', borderRadius: '5px' }} placeholder='Pakistan' ></input>

                    {user ?

                        <h3>{user.email}</h3> :
                        <button onClick={() => navigate('/Login')} style={{ height: '3rem', fontWeight: 'bold', fontSize: '20px', marginTop: '10px', border: 'none', background: 'none', width: '7%' }} ><u>Login</u></button>
                    }

                    <div style={{ cursor: 'pointer', display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10, marginTop: 10 }}>
                        <div style={{ position: "relative" }}>
                            <img src={sellicon} style={{ width: '5.5rem' }}></img>
                            <span onClick={() => navigate('/Sell')} style={{ position: "absolute", top: "45%", left: "48%", transform: "translate(-50%, -50%)", color: "black", fontSize: 15, fontWeight: 'bold' }}>+SELL</span>
                        </div>
                    </div>
                </nav>







            </div>
        </div>




    )
}

export default Navbar;
