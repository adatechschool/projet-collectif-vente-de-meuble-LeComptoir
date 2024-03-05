import Header from './component/header'
import Magasin from './component/magasin'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './component/login';
import Product from './component/products/product';

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
      </Routes>
    </Router>
    </>
  )
 
}

export default App
