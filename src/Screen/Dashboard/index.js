import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/index";
import { getDataFromApi } from "../../Config/Firebase";
import ApiCards from "../../Components/Cards";
import Footer from "../../Components/Footer";
import Categories from "../../Components/Icons";

function Dashboard() {
    const [postdata, setPostData] =useState([]);

useEffect(()=>{
getApiData();
}, [])

const getApiData = async()=>{
const ads = await getDataFromApi()
console.log("🚀 ~ getApiData ~ ads:", ads)
setPostData(ads);
}

    return (
        <div>
            <Navbar />
            <Categories/>
{postdata.map((item) => {
    console.log("🚀 ~ {postdata.map ~ item:", item)
     return <ApiCards item={item} />
	})}
    <Footer/>


        </div>
    )
}

export default Dashboard;