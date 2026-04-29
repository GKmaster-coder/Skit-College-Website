import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import HeaderTop from './layout/HeaderTop'

const App = () => {
  return (
<>
<Router>
  <HeaderTop/>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  <Footer/>
</Router>
</>
  )
}

export default App
