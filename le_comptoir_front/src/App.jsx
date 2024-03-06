import Header from './component/header'
import Magasin from './component/productGrids.jsx/magasin'
import Cart from './component/cartPage/returnCart'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './component/login';
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
 
}

export default App
