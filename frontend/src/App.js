import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Shop';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory category="men"/>}/>
            <Route path='/whomens' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory category="kids"/>}/>
            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
