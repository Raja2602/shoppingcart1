import React,{ createContext,  useContext,  useReducer} from "react";

export let StoreContext=createContext({
    items:[],
    productCount:21,
   
    addToCart:()=>{},
    incQuantity:()=>{},
    decQuantity:()=>{}
})

export let reducer=(state,action)=>{
   switch(action.type)
   {
    case "add":
    {  
        let counter=0; 
        let newState=[];
        newState=state.map((item)=>{
       
        if(item.id===action.prod.id)
        { 
          item.count+=0.5;
          item.total++;
          counter++;
        }
        return item;
       })
       if(counter===0)
       {
        return([...newState,action.prod])
       
       }
       else
       
         return([...newState])
      }
      case"incQuantity":
      { action.prod.total++;
        
        
        let newState=state.map((item)=>{
          
          if(item.id===action.prod.id)
          { 
            item.count+=0.5;
           
          }
          return item;
          })
        return([...newState])
      }
      case"decQuantity":
      {
        let newState=state.map((item)=>{
          if(item.id===action.prod.id)
          {
            item.count-=0.5;
          }
          return item;
          })
        return([...newState])
      }
      

    default:
      return state;
   }
}
let StoreProvider=({children})=>{
     
    const[items,dispatch]=useReducer(reducer,[])
    let addToCart=(product)=>{
      
       dispatch({type:"add",prod:product})
    }
    let incQuantity=(item)=>{
       dispatch({type:"incQuantity",prod:item})
    }
    let decQuantity=(item)=>{
      dispatch({type:"decQuantity",prod:item})
   }
  
    let value={
     items:items,
     addToCart:addToCart,   
     incQuantity:incQuantity,
     decQuantity:decQuantity,
          
    }
    
    return(
    <StoreContext.Provider value={value}>  {children}
    </StoreContext.Provider>
    )

}
export default StoreProvider;