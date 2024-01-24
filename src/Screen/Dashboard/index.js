import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/index";
import { getDataFromApi } from "../../Config/Firebase";
import ApiCards from "../../Components/Cards";

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
{postdata.map((item) => {
    console.log("🚀 ~ {postdata.map ~ item:", item)
     return <ApiCards item={item} />
	})}


        </div>
    )
}

export default Dashboard;