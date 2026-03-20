import React, { useState } from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Mocktails() {

const mocktails = [
{
id:501,
name:"Virgin Mojito",
description:"Refreshing mint lime soda drink.",
price:149,
imageLoc:"/image/Virgin Mojito.jpg"
},
{
id:502,
name:"Pineapple Punch",
description:"Sweet pineapple drink with citrus flavor.",
price:169,
imageLoc:"/image/pineapple-punch.webp"
},
{
id:503,
name:"Strawberry Lemonade",
description:"Fresh strawberries mixed with lemonade.",
price:159,
imageLoc:"/image/strawberry-lemonade.jpg"
},
{
id:504,
name:"Blue Lagoon",
description:"Tropical blue citrus drink served chilled.",
price:179,
imageLoc:"/image/blue-lagoon.jpg"
},
{
id:505,
name:"Mango Mule",
description:"Mango juice with ginger and lime twist.",
price:189,
imageLoc:"/image/mango-mule.jpg"
},
{
id:506,
name:"Cucumber Cooler",
description:"Mint and cucumber refreshing cooler.",
price:149,
imageLoc:"/image/cucumber-cooler.jpg"
},
{
id:507,
name:"Watermelon Splash",
description:"Fresh watermelon juice with mint.",
price:169,
imageLoc:"/image/wat.jpg"
},
{
id:508,
name:"Kiwi Delight",
description:"Tangy kiwi mocktail with soda fizz.",
price:179,
imageLoc:"/image/ki.avif"
},
{
id:509,
name:"Orange Sunrise",
description:"Orange juice layered with grenadine.",
price:159,
imageLoc:"/image/ora.jpg"
},
{
id:510,
name:"Mint Lime Soda",
description:"Classic Indian refreshing soda drink.",
price:139,
imageLoc:"/image/lem.webp"
},
{
id:511,
name:"Berry Blast",
description:"Mixed berry refreshing mocktail.",
price:189,
imageLoc:"/image/be1.webp"
},
{
id:512,
name:"Apple Cooler",
description:"Fresh apple juice mixed with soda.",
price:159,
imageLoc:"/image/app.jpg"
}
];

const dispatch = useDispatch();

const itemsPerPage = 3;
const totalPages = Math.ceil(mocktails.length/itemsPerPage);

const [currentPage,setCurrentPage]=useState(1);

const lastIndex=currentPage*itemsPerPage;
const firstIndex=lastIndex-itemsPerPage;
const currentItems=mocktails.slice(firstIndex,lastIndex);

const handlePrev=()=>{
if(currentPage>1) setCurrentPage(currentPage-1);
}

const handleNext=()=>{
if(currentPage<totalPages) setCurrentPage(currentPage+1);
}

return(
<div className="container">

<ToastContainer position="top-right" autoClose={2000}/>
<br/>
  

<h1 className="page-title">🍹 Exotic Mocktail Collection</h1>
<br/>
      <br/>

<div className="card-row">

{currentItems.map(item=>(
<div className="card" key={item.id}>

<img src={item.imageLoc} alt={item.name}/>

<div className="card-body">

<h3>{item.name}</h3>

<p>{item.description}</p>

<h4 className="price">
{item.price.toLocaleString("en-IN",{style:"currency",currency:"INR"})}
</h4>

<button
className="order-btn"
onClick={()=>{
dispatch(addToCart(item))
toast.success("Product "+item.name+" added to cart")
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
marginTop:"35px",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

<button
onClick={handlePrev}
disabled={currentPage===1}
style={{
padding:"8px 14px",
border:"none",
borderRadius:"8px",
background:"linear-gradient(135deg,#ff7a18,#ff5722)",
color:"white",
fontWeight:"bold",
marginRight:"15px",
cursor:"pointer"
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
padding:"7px 13px",
borderRadius:"6px",
border:"none",
backgroundColor:currentPage===index+1?"#ff5722":"#eee",
color:currentPage===index+1?"white":"#333",
cursor:"pointer"
}}
>
{index+1}
</button>
))}

<button
onClick={handleNext}
disabled={currentPage===totalPages}
style={{
padding:"8px 14px",
border:"none",
borderRadius:"8px",
background:"linear-gradient(135deg,#ff7a18,#ff5722)",
color:"white",
fontWeight:"bold",
marginLeft:"15px",
cursor:"pointer"
}}
>
→
</button>

</div>

</div>
)

}

export default Mocktails;