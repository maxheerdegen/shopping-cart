import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header/>
      <Outlet context={[cartItems, setCartItems]}/>
      <Footer/>
    </>
  )
}

export default App
