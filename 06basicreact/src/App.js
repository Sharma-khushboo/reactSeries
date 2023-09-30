
import './App.css';
//import { createRoot} from 'react-dom/client';
import Contact from './pages/Contact';
import {
  BrowserRouter, Routes, Route, Link }from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nopage from './pages/Nopage';
import About from './pages/About';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <ul className='nav'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
     
    <Routes>

      <Route path='/contact' element={<Contact/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<Nopage/>}/>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
