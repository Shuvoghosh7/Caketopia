import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import TopNav from './Component/Navbar/TopNav';
import Home from './Pages/Home/Home';
import BestSellers from './Pages/Products/BestSellers/BestSellers';
import NewItems from './Pages/Products/NewItems/NewItems';
import OurFeatures from './Pages/Products/OurFeatures/OurFeatures';
import ShopCart from './Pages/ShopCart/ShopCart';
function App() {
  let x = localStorage.getItem("cartss")
  let y = JSON.parse(x)
  console.log(y)
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
    const x = [...cart, item];
    localStorage.setItem("cartss", JSON.stringify(x))
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }
  
  return (
    <div>
      <TopNav />
      <Navbar size={y.length} />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='OurFeatures' element={<OurFeatures handleClick={handleClick} />} />
          <Route path='bestSellers' element={<BestSellers />} />
          <Route path='newItems' element={<NewItems />} />
        </Route>

        <Route path='/shopCart' element={<ShopCart cart={cart} setCart={setCart} handleChange={handleChange} />} />



      </Routes>
    </div>
  );
}

export default App;
