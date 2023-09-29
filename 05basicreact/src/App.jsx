import { useState } from 'react';
import './App.css';
import {  BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Nopage from './pages/NoPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter>
     <ul className='nav'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/project'>Project</Link></li>
     </ul>

     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='*' element={<Nopage/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
