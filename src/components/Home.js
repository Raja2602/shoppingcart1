import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/store-context";
let Home=()=>{
        const[products,setProducts]=useState([]);
        let content=useContext(StoreContext);
        async function fun()
            {
                try {
                    let resp=await axios.get("https://fakestoreapi.com/products");
                    setProducts(resp.data);
                } catch (error) {
                    console.log("error",error);
                }
            }
        useEffect(()=>{fun()},[]) 

        let update=(obj)=>{
         content.addToCart(obj);
        }
        

       
    return(
        <div>
          
          <div className="grid md:grid-cols-3 grid-cols-1 space-y-3">
          {products.map((item)=>{
          {item.count=1}
          {item.total=0}
          return(<div key={item.id} className="m-3 h-80 w-96">
          <img className="h-40 w-40 ml-28" src={item.image} alt="pic"/>
          <p>{item.title}</p>

          <p>{`$${item.price}`}</p>
          <button type="submit" className="bg-slate-700 text-white w-auto p-1 rounded-lg ml-5" 
          onClick={
            ()=>{update({id:item.id,image:item.image,title:item.title,price:item.price,count:item.count,total:item.total})}}>
            Add To Cart
          </button>
          </div>)})}
          </div>
        </div>
    )
}
export default Home;