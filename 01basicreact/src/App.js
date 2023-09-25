import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Khushi from './Khushi';
import Form from './Components/Form';

function App() {
 
  let [number1, setNumber1] = useState('');
  let[number2, setNumber2] = useState('');
  let [diff, setDiff] = useState(0);
  const subfun = (num1,num2)=>{
    const total= parseInt(num1)-parseInt(num2);
    setDiff(total);
  }

  return (
   <>

   <input
   type='number'
   placeholder='enter a no.'
   value={number1}
   onChange={(e)=> setNumber1(e.target.value)}
   />

   <input 
   type = 'number'
   placeholder='enter a second no.'
  value={number2}
  onChange={(e)=> setNumber2(e.target.value)}
   />

   <button onClick={()=> subfun(number1,number2)}>subtract</button>

   <br/>

   <span>The difference of {number1} and {number2} is : {diff}</span>


  <Khushi/>
  <Form/>
   </>
  );
}

export default App;
