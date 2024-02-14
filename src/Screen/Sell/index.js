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
            productname,
            price,
            description,
            quantity,
            image
        });

    
}
    return (

<div style={styles.container}>
<h2 style={styles.heading}>Sell Your Product</h2>
<div style={styles.formContainer}>
    <input style={styles.input} placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} /><br />
    <input style={styles.input} placeholder="Price" onChange={(e) => setPrice(e.target.value)} /><br />
    <input style={styles.input} placeholder="Description" onChange={(e) => setDescription(e.target.value)} /><br />
    <input style={styles.input} placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} /><br /><br />
    <input style={styles.fileInput} type="file" onChange={(e) => setImage(e.target.files[0])} /><br />
    <button style={styles.button} onClick={handlePostAddBtn}>Post Add</button>
</div>
</div>
    )
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
        padding: "20px",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#333",
    },
    formContainer: {
        maxWidth: "400px",
        width: "100%",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    input: {
        width: "90%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
    },
    fileInput: {
        width: "100%",
        marginBottom: "15px",
    },
    button: {
        width: "100%",
        padding: "12px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};


export default SellPage;






