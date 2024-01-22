import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Screen/Dashboard";
import RegisterPage from "../../Screen/Register";
import LoginPage from "../../Screen/Login";
import SellPage from "../../Screen/Sell";

function RouterApp() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Register" element={<RegisterPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Sell" element={<SellPage/>} />
            </Route>
        </Routes>
    )
}

export default RouterApp;