import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import TopNav from './Component/Navbar/TopNav';
import Home from './Pages/Home/Home';
import BestSellers from './Pages/Products/BestSellers/BestSellers';
import NewItems from './Pages/Products/NewItems/NewItems';
import OurFeatures from './Pages/Products/OurFeatures/OurFeatures';
import ShopCart from './Pages/ShopCart/ShopCart';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Component/Footer/Footer';

function App() {
  let getCartData = localStorage.getItem("cartss")
  let storeCartData = JSON.parse(getCartData)
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const handleClick = (item) => {
    let isPresent = false;
    storeCartData.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
    const cartItem = [...cart, item];
    localStorage.setItem("cartss", JSON.stringify(cartItem))
  }

  const handleChange = (item, d) => {
    let ind = -1;
    storeCartData.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = storeCartData;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
    let dd = [...tempArr]
    localStorage.setItem("cartss", JSON.stringify(dd))
  }
  return (
    <div>
      <TopNav />
      <Navbar size={storeCartData.length} />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='OurFeatures' element={<OurFeatures handleClick={handleClick} />} />
          <Route path='bestSellers' element={<BestSellers />} />
          <Route path='newItems' element={<NewItems />} />
        </Route>
        <Route path='/shopCart' element={<ShopCart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Footer/>
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </div>
  );
}

export default App;
