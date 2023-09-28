import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: 'hitesh',
    age:21,
  };
  let newarr = [
    {name:'khushboo'},
    {name:'khushboo1'},
    {name:'khushboo2'},
    {name:'khushboo3'},
    {name:'khushboo4'},

  ];


  return (
    <>
     <h1 className='text-black rounded bg-green-500 mb-4'>Hello World</h1>

     <Card username='chai or code' somefun={newarr} />
     <Card  btntxt='btn-txt'/>
    </>
  )
}

export default App
