import "./Navbar.scss"

import bag from "../../img/Bag.svg"
import xicon from "../../img/xmark-solid.svg"
import bar from '../../img/bars-solid.svg'
import deleteIcon from  '../../img/delete.svg'

import data from "../../data/Eqiupments.jsx"
import { useState } from "react";


function Navbar({count, setCount}) {
  function deleteFromBasket(id){
    setCount(count-data[id].count);
    data[id].count=0;
  }

  const [NavBg,setNavBg]=useState(false)
  const changeNavBg=()=>{
    window.scrollY >0 ? setNavBg(true) : setNavBg(false);
  }
  window.addEventListener("scroll",changeNavBg)

  const [showBasket,setShowBasket]=useState(false)
  const [openBurger,setOpenBurger]=useState(false)

  return (
    <>
    <nav className={NavBg ? "navbar scroll" : "navbar"}>
      <div className="container">
        <h1>Furnitures</h1>
        <div className="navbar-middle">
          <a href="#furniture">Furniture</a>
          <a href="#shop">Shop</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="basket-img">
          <img onClick={()=>{setShowBasket(true)}} src={bag} alt="" />
          <div>
            <p>{count}</p>
          </div>
        </div>
        <span onClick={()=>{setOpenBurger(true)}}>
          <img className="hamburger" src={bar} alt="" />
        </span>
      </div>
    </nav>
    {openBurger &&
      <div className="mobile-menu">
        <div className={openBurger ? "mobile-menu-wrapper open" : "mobile-menu-wrapper"}>
          <img onClick={()=>{setOpenBurger(false)}} src={xicon} alt="" />
          <h1>Menu</h1>
          <a className="mobile-link" onClick={()=>{setOpenBurger(false)}} href="#furniture">Furniture</a>
          <a className="mobile-link" onClick={()=>{setOpenBurger(false)}} href="#shop">Shop</a>
          <a className="mobile-link" onClick={()=>{setOpenBurger(false)}} href="#about">About us</a>
          <a className="mobile-link" onClick={()=>{setOpenBurger(false)}} href="#contact">Contact</a>
        </div>
      </div>
    }
    {showBasket && 
      <div className="basket">
        <div className="container">
            <h1>Basket</h1>
            <hr/>
            <div className="basket-list">
              {
                data.filter(data=>data.count>0).map((item)=>(
                  <div className="basket-items" key={item.id}>
                    <img className="item-img" src={item.img} alt="" />
                    <span>
                      <h4>{item.name}</h4>
                      <p>Price: ${item.price*item.count}</p>
                      <p>Number of furniture: {item.count}</p>
                    </span>
                    <h2 onClick={()=>{deleteFromBasket(item.id)}}>Delete from basket</h2>
                    <div>
                      <img onClick={()=>{deleteFromBasket(item.id)}} className="delete-icon" src={deleteIcon} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
            <img className="close" onClick={()=>{setShowBasket(false)}} src={xicon} alt="" />
        </div>
      </div>
    }
    </>
  )
}

export default Navbar