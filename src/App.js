import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Home from './components/Home';
import StoreProvider, { StoreContext } from './store/store-context';
import Checkout from './components/Checkout';
import { useContext, useEffect, useState} from 'react';
function App() {
  
  let valit=useContext(StoreContext);
    
   
  const [f, setF] = useState(0);
  let dry = () => {
    let totalQuantity = 0; // Initialize as a number
  
    // Use forEach to iterate through items and add their counts
    valit.items.forEach((item) => {
      totalQuantity += item.count;
    });
  
    // Update the state variable with the totalQuantity as a number
    setF(totalQuantity);
  };
  useEffect(()=>{dry()},[valit.items])
  return (
    <BrowserRouter>
    
    <div className="App">
     {/*nav bar*/}
     
     <main className='bg-white min-h-screen'>
      
     <div className='bg-slate-700  p-1 flex justify-between font-semibold text-gray-50 sticky top-0 '>
     <Link to='/'><button>Home</button></Link>
     <h1>UttaraShop</h1>
     <div className='flex space-x-2' >
     <Link to="/contact"> <button type='button' >Contact</button> </Link>
     <div className='mt-1'> 
     <Link to="/cart"><FaShoppingCart className='relative'/> </Link>
     <div className='bg-red-500 w-3 h-3 absolute top-1 -right-0 rounded-full flex  justify-center items-center text-xs'>
      {f}
      </div>
     </div>
     </div>
     </div>
     
     <Routes>
     <Route path='/' element={<Home/>}/>
     
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
    
     
     </main>
     
     
    

     
    </div>
    </BrowserRouter>
  );
}

export default App;
