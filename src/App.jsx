import './App.scss'
import Navbar from "./components/navbar/Navbar.jsx"
import Main from "./components/main/Main.jsx"
import Choosing from "./components/choosing/Choosing.jsx"
import Furniture from "./components/furniture/Furniture.jsx"
import Shop from "./components/shop/Shop.jsx"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import { useState } from 'react'

function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <Navbar count={count} setCount={setCount}/>
      <Main count={count} setCount={setCount}/>
      <Choosing/>
      <Furniture count={count} setCount={setCount}/>
      <Shop/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
