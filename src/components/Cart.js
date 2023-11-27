import React, {useContext, useEffect, useState} from "react";
import { StoreContext } from "../store/store-context";
import { useNavigate } from "react-router-dom";
import { number } from "yup";
let Cart=()=>{
    let navigat=useNavigate();
    let values=useContext(StoreContext);
    const[amount,setAmount]=useState(1);
    const totalCost = () => {
        let total = 0;
        values.items.forEach((item) => {
          total += item.count * item.price;
        
        });
        total=total.toFixed(2);
        setAmount((total));
      };
    
      // Use useEffect to calculate the total cost whenever items change
      useEffect(() => {
        totalCost();
      }, [values.items]);
    
    return(
        <div>
            
           {(values.items.length===0)?<h1 className="font-semibold">
                your shopping cart is empty 
            </h1>:<div >
            {values.items.map((item)=>{return(
                   (item.count>0)?<div className="mx-auto h-24 flex justify-between w-7/12 space-x-5 border-solid border-4 mt-5 mb-6 " key={item.id}>
                    <img src={item.image} alt="dp" className="mt-1 h-16 w-56 ml-28"/>
                    <p>{item.title} <br/> {`$${item.price}`}</p>
                    <div className="flex justify-end space-x-4 m-6 p-1 ">
                    <button type="button" className="font-bold" onClick={()=>{values.incQuantity(item);totalCost(item);}}>+</button>
                    <p className="font-bold mt-1">{item.count}</p> 
                    <button className="font-bold " onClick={()=>{values.decQuantity(item);totalCost(values.items)}}>-</button>
                    </div>
                    </div>:null
                
            )})}
            <h1 className="font-bold">total amount is ${amount}</h1>
            <div  className="flex justify-center space-x-3 text-white">
            <button className="bg-black p-1 rounded-xl " onClick={()=>{navigat("/")}}>continue shopping</button>
            <button className="bg-black p-1 rounded-xl" onClick={()=>{navigat("/Checkout")}}>checkout</button>
            </div>
            </div>
    
            }
            

        </div>
    )
}
export default Cart;