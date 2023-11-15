import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Index from './pages/customer'
import About_us from './pages/customer/about_us'
import Contact from './pages/customer/contact'
import Help from './pages/customer/help'
import Menu from './pages/customer/menu'
import Login from './pages/customer/login'
import Signup from './pages/customer/signup'

function App () {

  return (
    <>
         <BrowserRouter>
           <Routes>
               <Route path='/' element={<Index/>}></Route>
               <Route path='about_us/' element={<About_us/>}></Route>
               <Route path='contact/' element={<Contact/>}></Route>
               <Route path='menu/' element={<Menu/>}></Route>
               <Route path='help/' element={<Help/>}></Route>

               <Route path='signup/' element={<Signup/>}/>
               <Route path='login/' element={<Login/>}/>
           </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
