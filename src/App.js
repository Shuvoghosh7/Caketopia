import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import TopNav from './Component/Navbar/TopNav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <TopNav/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </div>
  );
}

export default App;
