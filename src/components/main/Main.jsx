import "./Main.scss"
import icon from "../../img/icons_search.svg"
import { useState } from "react"
import data from "../../data/Eqiupments.jsx"
import xmark from "../../img/xmark-solid.svg"

function Main({count,setCount}) {
  const [value,setValue]=useState('');
  const [showSearch,setShowSearch]=useState(false)

  function itemAdd(id){
    data[id].count=data[id].count+1;
    setCount(count+1);
  }

  function itemSubs(id){
    data[id].count=data[id].count-1;
    setCount(count-1);
  }
  return (
    <>
    <section className="main">
      <div className="container">
        <h1>Make your interior more minimalistic & modern</h1>
        <h3>Turn your room with panto into a lot more minimalist and modern with ease and speed</h3>
        <form onSubmit={(e)=>{e.preventDefault(); setShowSearch(true)}} action="">
          <input value={value} onChange={(e)=>{setValue(e.target.value.toLowerCase())}} type="text" placeholder="Search furniture" required />
          <button  type="submit"><img src={icon} alt=""/></button>
        </form>
      </div>
    </section>
    {showSearch && 
      <div className="main-search">
        <div className="container">
          <h1>Result of search</h1>
          <hr />
          <img className="close-btn" onClick={()=>{setShowSearch(false); setValue('')}} src={xmark} alt="" />
          <div className="main-list">
            {data.filter(data=>data.name.toLowerCase().includes(value)).map((item)=>(
              <div className="search-item" key={item.id}>
                <img className="furniture-img" src={item.img}/>
                <h2>{item.type}</h2>
                <h1>{item.name}</h1>
                <span>
                  <p>${item.price}</p>
                  {item.count==0 && <button className="furniture-add-btn" onClick={()=>{itemAdd(item.id)}}>+</button> }
                  {item.count!=0 && 
                  <div className="furniture-counter">
                      <button className="furniture-button" onClick={()=>{itemSubs(item.id)}}>-</button>
                      <p>{item.count}</p>
                      <button className="furniture-button" onClick={()=>{itemAdd(item.id)}}>+</button>
                  </div>}
                </span>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Main