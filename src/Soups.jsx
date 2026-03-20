import React, { useState } from "react";
import "./NonVeg.css";   // reuse same styling
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Soups() {

const soupItems = [

{
id:101,
name:"Tomato Basil Soup",
description:"Creamy tomato soup infused with fresh basil.",
price:149,
imageLoc:"/image/Tomato_Soup.jpg"
},
{
id:102,
name:"Sweet Corn Soup",
description:"Light and comforting sweet corn vegetable soup.",
price:169,
imageLoc:"/image/Sweetcorn.jpg"
},
{
id:103,
name:"Hot & Sour Soup",
description:"Classic Indo-Chinese spicy vegetable soup.",
price:179,
imageLoc:"/image/Hotsour.jpg"
},
{
id:104,
name:"Creamy Mushroom Soup",
description:"Rich mushroom soup blended with herbs.",
price:189,
imageLoc:"/image/mushrromsoup.jpg"
},
{
id:105,
name:"Pumpkin Cream Soup",
description:"Smooth pumpkin soup with mild spices.",
price:159,
imageLoc:"/image/pump.webp"
},
{
id:106,
name:"Broccoli Cheese Soup",
description:"Creamy broccoli soup topped with cheese.",
price:199,
imageLoc:"/image/bro.jpg"
},
{
id:107,
name:"Chicken Manchow Soup",
description:"Spicy chicken soup served with crispy noodles.",
price:219,
imageLoc:"/image/ChickenSoup.jpg"
},
{
id:108,
name:"Chicken Sweet Corn Soup",
description:"Chicken and corn soup loved by everyone.",
price:199,
imageLoc:"/image/Chickensweetcorn.jpg"
},
{
id:109,
name:"Mutton Shorba",
description:"Traditional mutton broth full of spices.",
price:249,
imageLoc:"/image/muttonshourba.jpg"
},
{
id:110,
name:"Chicken Clear Soup",
description:"Healthy clear chicken soup with herbs.",
price:179,
imageLoc:"/image/chi.jpg"
},
{
id:111,
name:"Prawn Lemon Soup",
description:"Tangy seafood soup with lemon flavour.",
price:229,
imageLoc:"/image/pra.webp"
},
{
id:112,
name:"Seafood Soup",
description:"Mixed seafood soup cooked with aromatic spices.",
price:269,
imageLoc:"/image/sea.jpg"
},
{
id:113,
name:"Spinach Almond Soup",
description:"Healthy spinach soup enriched with almonds.",
price:169,
imageLoc:"/image/spi.jpg"
},
{
id:114,
name:"Chicken Pepper Soup",
description:"Hot chicken broth flavored with black pepper.",
price:209,
imageLoc:"/image/chik.jpg"
},
{
id:115,
name:"Vegetable Clear Soup",
description:"Light vegetable broth perfect for starters.",
price:149,
imageLoc:"/image/veg.jpg"
}

];

const dispatch = useDispatch();

const itemPerPage = 3;
const totalPages = Math.ceil(soupItems.length / itemPerPage);

const [currentPage,setCurrentPage] = useState(1);

const indexOfLastItem = currentPage * itemPerPage;
const indexOfFirstItem = indexOfLastItem - itemPerPage;

const currentItems = soupItems.slice(indexOfFirstItem,indexOfLastItem);

const handlePrev = () => {
if(currentPage > 1) setCurrentPage(currentPage - 1);
};

const handleNext = () => {
if(currentPage < totalPages) setCurrentPage(currentPage + 1);
};

return(

<div className="container">

<ToastContainer position="top-right" autoClose={1000} />
<br/>


<h1 className="page-title">🍲 Signature Soup Collection</h1>

<br/>
<br/>

<div className="card-row">

{currentItems.map((item)=>(

<div className="card" key={item.id}>

<img src={item.imageLoc} alt={item.name} className="card-img"/>

<div className="card-body">

<h3>{item.name}</h3>

<p>{item.description}</p>

<h4 className="price">
{item.price.toLocaleString("en-IN",{style:"currency",currency:"INR"})}
</h4>

<button
className="order-btn"
onClick={()=>{
dispatch(addToCart(item));
toast.success("Product "+item.name+" added to cart");
}}
>

Add To Cart

</button>

</div>

</div>

))}

</div>

{/* Pagination */}

<div
  style={{
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>

<button
  onClick={handlePrev}
  disabled={currentPage === 1}
  style={{
    padding: "8px 14px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg,#ff7a18,#ff5722)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    marginRight: "15px"   // 👈 space after arrow
  }}
>
  ←
</button>


{Array.from({length:totalPages},(_,index)=>(

<button
key={index}
onClick={()=>setCurrentPage(index+1)}
style={{
margin:"0 6px",
backgroundColor: currentPage===index+1 ? "#ff5722" : "#eee",
color: currentPage===index+1 ? "white" : "black",
padding:"6px 12px",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}
>
{index+1}
</button>

))}

<button
  onClick={handleNext}
  disabled={currentPage === totalPages}
  style={{
    padding: "8px 14px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg,#ff7a18,#ff5722)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
    marginLeft: "15px"   // 👈 space before arrow
  }}
>
  →
</button>

</div>

</div>

);

}

export default Soups;