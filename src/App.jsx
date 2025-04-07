import { useState } from 'react'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
