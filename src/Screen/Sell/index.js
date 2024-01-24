import { useState } from "react";
import { PostAdd } from "../../Config/Firebase";

function SellPage() {
const [productname, setProductName] =useState()
const [price, setPrice] =useState()
const [description, setDescription] =useState()
const [quantity, setQuantity] =useState()
const [image, setImage] =useState()

function handlePostAddBtn() {
    PostAdd({
        productname, price, description, quantity, image
    })
    
}
    return (
        <div>
            <input placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} /><br/>
            <input placeholder="Price" onChange={(e)=>setPrice(e.target.value)} /><br/>
            <input placeholder="Description" onChange={(e)=>setDescription(e.target.value)} /><br/>
            <input placeholder="quantity" onChange={(e)=>setQuantity(e.target.value)} /><br/><br/>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} ></input><br/>
            <button onClick={handlePostAddBtn}>Post Add</button>

        </div>
    )
}

export default SellPage;