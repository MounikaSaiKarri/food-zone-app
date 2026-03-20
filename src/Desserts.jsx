import React,{useState} from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";

function Desserts(){

const desserts=[
{ id:401,name:"Gulab Jamun",description:"Soft milk dumplings soaked in sugar syrup.",price:129,imageLoc:"/image/gulab-jamuns.jpg"},
{ id:402,name:"Rasmalai",description:"Paneer discs soaked in saffron milk.",price:149,imageLoc:"/image/Rasmalai.webp"},
{ id:403,name:"Chocolate Brownie",description:"Warm rich chocolate brownie.",price:179,imageLoc:"/image/chocolate.jpg"},
{ id:404,name:"Ice Cream Sundae",description:"Vanilla ice cream topped with chocolate.",price:159,imageLoc:"/image/ice-cream.jpg"},
{ id:405,name:"Kunafa",description:"Crispy filo pastry layered with cheese.",price:249,imageLoc:"/image/kunafa.webp"},
{ id:406,name:"Cheesecake",description:"Creamy baked cheesecake dessert.",price:219,imageLoc:"/image/cheesecake.jpg"},
{ id:407,name:"Tiramisu",description:"Italian coffee flavored dessert.",price:259,imageLoc:"/image/tira.jpg"},
{ id:408,name:"Red Velvet Cake",description:"Soft red velvet cake with cream cheese.",price:199,imageLoc:"/image/red.jpg"},
{ id:409,name:"Chocolate Lava Cake",description:"Molten chocolate cake served warm.",price:229,imageLoc:"/image/lava.jpg"},
{ id:410,name:"Fruit Custard",description:"Fresh fruits in creamy custard.",price:159,imageLoc:"/image/cus.jpg"},
{ id:411,name:"Mango Delight",description:"Mango flavored creamy dessert.",price:189,imageLoc:"/image/man.webp"},
{ id:412,name:"Caramel Pudding",description:"Soft pudding topped with caramel.",price:169,imageLoc:"/image/car.avif"}
];

const dispatch=useDispatch()

const itemsPerPage=3
const totalPages=Math.ceil(desserts.length/itemsPerPage)

const[currentPage,setCurrentPage]=useState(1)

const lastIndex=currentPage*itemsPerPage
const firstIndex=lastIndex-itemsPerPage

const currentItems=desserts.slice(firstIndex,lastIndex)

const handlePrev=()=>{ if(currentPage>1)setCurrentPage(currentPage-1)}
const handleNext=()=>{ if(currentPage<totalPages)setCurrentPage(currentPage+1)}

return(

<div className="container">

<ToastContainer position="top-right" autoClose={2000}/>
<br/>
  

<h1 className="page-title">🍨 Heavenly Dessert Collection</h1>
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

export default Desserts