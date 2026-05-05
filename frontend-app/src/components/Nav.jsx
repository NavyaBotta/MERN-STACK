function Nav(){
    return(
        <nav style= {{backgroundColor:"goldenrod",height:"99Px"}}>
            <ol style={ListStylings.orderList}>

                <li style={ListStylings.list}> Home </li>
                <li style={ListStylings.list}> Log </li>
                <li style={ListStylings.list}> Register </li>
                <li style={ListStylings.list}> About </li>
            </ol>
        </nav>
    )
};

//declaring stylings
const ListStylings={
    list:{
        backgroundColor:"powderblue",
        padding:"10px 20px",
        fontSize:"22px",
        fontWeight:"bold",
        boxShadow:"2px 5px gpx red",
        textShadow:"1px 4px 5px brown"
    },
    orderList:{
    display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "30px",
                padding:"30px",
                listStyle:"none",
}
}
export default Nav;
