import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from './component/header'
import Magasin from './component/productGrids.jsx/magasin'
import Login from './component/login';
import ProductManage  from './component/admin/productManage';
import Product from './component/prooductPage/product'

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
        <Route path="/login" element={<ProductManage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
