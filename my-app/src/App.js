
import './App.css';
import HomePage from './Component/HomePage';
import ProductApi from './Component/ProductApi'
import Login from './Component/Login'
import Sign from './Component/Sign'
import NoPage from './Component/NoPage';
import AddtoCard from './Component/AddtoCard';
import Shop from './Component/Shop'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route  path="productapi"element={<ProductApi />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<Sign />} />
          <Route path="addtocard" element={<AddtoCard />} />
          <Route path="*" element={<NoPage />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
