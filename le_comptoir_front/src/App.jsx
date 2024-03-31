import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './component/header'
import Magasin from './component/productGrids/magasin'
import Login from './component/admin/login';
import Product from './component/prooductPage/product'
import ProductManage  from './component/admin/productManage';


import './App.css'

const Hompeage = () => {
  return (
    <>
      <Header />
      <Magasin />
    </>
  )
}


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hompeage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productManage" element={<ProductManage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
