import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import UserPage from "./page/UserPage";


function App() {
  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate == true? <UserPage/> : <Navigate to="/login"/>
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/product/:id/" element={<ProductDetail />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/user" element={<PrivateRoute />}/>
      </Routes>
    </div>
  );
}

export default App;

