import { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Search from './Components/Serach/Search'
import Jobs from './Components/Job/Job'
import Value from './Components/Value/Value'
import Footer from './Components/Footer/Footer'

const App=()=>{
  return(
    <div className='w-[93%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App