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
import Dashboard from './Pages/Dashboard/Dashboard';
import Addproduct from './Pages/Dashboard/Addproduct/Addproduct';
import AllProduct from './Pages/Dashboard/AllProduct/AllProduct';
import AddBlogs from './Pages/Dashboard/AddBlogs/AddBlogs';
import SingIn from './Component/SingIn/SingIn';
import SingUp from './Component/SingUp/SingUp';

function App() {
  let getCartData = localStorage.getItem("cartss")
  let storeCartData = JSON.parse(getCartData)
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    storeCartData.forEach((product) => {
      if (item._id === product._id)
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
      if (data._id === item._id)
        ind = index;
    });
    const tempArr = storeCartData;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0)
      tempArr[ind].quantity = 1;
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
          <Route path='newItems' element={<NewItems handleClick={handleClick}/>} />
        </Route>

        <Route path='/shopCart' element={<ShopCart cart={cart} setCart={setCart} handleChange={handleChange} />} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path='/singup' element={<SingUp />} />

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='addProduct' element={<Addproduct/>}/>
          <Route path='allproduct' element={<AllProduct handleClick={handleClick} />}/>
          <Route path='addBlogs' element={<AddBlogs/>}/>
        </Route>
      </Routes>


      <Footer />
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </div>
  );
}

export default App;
