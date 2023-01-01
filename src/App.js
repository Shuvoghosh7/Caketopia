import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import TopNav from './Component/Navbar/TopNav';
import Home from './Pages/Home/Home';
import BestSellers from './Pages/Products/BestSellers/BestSellers';
import NewItems from './Pages/Products/NewItems/NewItems';
import OurFeatures from './Pages/Products/OurFeatures/OurFeatures';




function App() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='OurFeatures' element={<OurFeatures />} />
          <Route path='bestSellers' element={<BestSellers />} />
          <Route path='newItems' element={<NewItems />} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
