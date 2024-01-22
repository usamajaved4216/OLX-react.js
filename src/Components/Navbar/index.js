import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()


    return (
        <div style={{ background: 'bisque' }} >
            <nav>
                <h1>Navabar</h1>
                <button onClick={() => navigate('/Login')} >Login</button>
                <button>Logout</button>
                <button onClick={() => navigate('/Sell')}>+ sell</button>

            </nav><br />
        </div>
    )
}

export default Navbar;