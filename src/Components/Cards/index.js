function ApiCards(props) {
    
    const { description, imageUrl, title, id, productName, price } = props.item;

    return(
        <div style={{ display: "inline-flex", marginBottom: 20, margin: 10, cursor: "pointer" }}  >
        <div style={{ borderRadius: 5, height: 400, border: '1px solid rgb(199, 196, 196)' }} className="color">
            {imageUrl ?
                <img style={{ width: '17.3rem', height: 200, borderRadius: 5, borderBottom: '1px solid rgb(180, 190, 190)' }} src={imageUrl} className="card-img-top" alt="alt" />
                : null}
            <div style={{ width: "16rem", height: 200, textAlign: "left", paddingLeft: 10, marginTop: -10 }}>
                <h4>Rs. {price} <img  style={{ paddingLeft: '10rem' }} /></h4>
                <p>{productName}</p>
                <p style={{ fontSize: 15 }}>{description}</p>
            </div>
        </div>
    </div>
    )
    
}



export default ApiCards;