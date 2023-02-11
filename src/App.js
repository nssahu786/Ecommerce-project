import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Layouts/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Layouts/Footer/Footer';
import ProductDetail from './Component/Pages/ProductDetail/ProductDetail';
import Login from './Component/User/Login/Login';
import Register from './Component/User/Register/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registeration" element={<Register />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
       
    </>
  );
}

export default App;
