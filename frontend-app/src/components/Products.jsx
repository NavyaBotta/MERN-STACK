const Products=()=>{

    let Products=[
        {
        name:"mobile",
        price:50000, 
        description:"good conditions",rating:"⭐⭐⭐",
        imagesrc:"https://idestiny.in/wp-content/uploads/2024/10/iPhone_16_Pro_Max_White_Titanium_PDP_Image_Position_1__en-IN-600x600.jpg",
    },
    {
        name:"laptop",
        price:70000, 
        description:"good conditions",rating:"⭐⭐⭐⭐",
        imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu987R-Az_8I-0icZ5EHJsz54l7d6IyH8dMQ&s",
    },
    {
        name:"cloths",
        price:50000, 
        description:"good conditions",rating:"⭐⭐⭐⭐",
        imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf84PkkRcpGewoNJyn9c0Nc1cLV33s-ejhpQ&s"}
];
    return (<div>
        {Products.map((product)=>(
            <div>
                <ProductCard details={product}/>
                </div>
        ))}
    </div> )
}
export default Products;
