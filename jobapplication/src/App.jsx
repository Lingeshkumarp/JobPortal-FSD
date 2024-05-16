import { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'
import Home from './Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App=()=>{
  return(
    <>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
          </Routes>
      </BrowserRouter>
    <div className='w-[93%] m-auto bg-white'>
      {/* <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/> */}
      
    </div>
    </>
  )
}

export default App