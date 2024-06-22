import { useState } from "react"
import "./Furniture.scss"
import data from "../../data/Eqiupments.jsx"
import solidStar from "../../img/solid.svg"
import regularstar from "../../img/regular.svg"
import xmark from "../../img/xmark-solid.svg"

function Furniture({count,setCount}) {
  const [active,setActive]=useState("chair");
  const [showModal,setShowModal]=useState(false)

  function returnStars(rating){
    let stars=[];
    for(let i=0;i<rating;i++){
      stars.push(<img src={solidStar} key={i}></img>)
    }
    for(let i=0;i<5-rating;i++){
      stars.push(<img src={regularstar} key={6-i}></img>)
    }
    return stars;
  }

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
    <section className="furniture" id="furniture">
      <div className="container">
        <h1>Best Selling Product</h1>
        <ul className="list">
          <li onClick={()=>{setActive("chair")}} className={active=="chair" ? "active":""}>Chair</li>
          <li onClick={()=>{setActive("beds")}} className={active=="beds" ? "active":""}>Beds</li>
          <li onClick={()=>{setActive("sofa")}} className={active=="sofa" ? "active":""}>Sofa</li>
          <li onClick={()=>{setActive("lamp")}} className={active=="lamp" ? "active":""}>Lamp</li>
        </ul>
        <div className="furniture-list">
          {
            data.filter(data=>data.type.includes(active)).map((item)=>(
              <div className="furniture-item" key={item.id}>
                <img className="furniture-img" src={item.img}/>
                <h2>{item.type}</h2>
                <h1>{item.name}</h1>
                <div className="furniture-star">{returnStars(item.rating)}</div>
                <span>
                  <p>${item.price}</p>
                  {item.count==0 && <button className="furniture-add-btn" onClick={()=>{itemAdd(item.id)}}>+</button> }
                  {item.count!=0 && <div className="furniture-counter">
                      <button className="furniture-button" onClick={()=>{itemSubs(item.id)}}>-</button>
                      <p>{item.count}</p>
                      <button className="furniture-button" onClick={()=>{itemAdd(item.id)}}>+</button>
                  </div>}
                </span>
              </div>
            ))
          }
        </div>
        <p onClick={()=>{setShowModal(true)}} className="furniture-show">View All Furnitures</p>
        
      </div>
    </section>
    {showModal && 
      <div className="modal">
          <div className="container">
              <img className="x-icon" onClick={()=>{setShowModal(false)}} src={xmark}/>
              <h1>All Furnitures</h1>
              <hr/>
              <div className="modal-list">
              {
                data.map((item,index)=>(
                  <div className="furniture-item" key={index}>
                  <img className="furniture-img" src={item.img}/>
                  <h2>{item.type}</h2>
                  <h1>{item.name}</h1>
                  <div className="furniture-star">{returnStars(item.rating)}</div>
                  <span>
                    <p>${item.price}</p>
                    {item.count==0 && <button className="furniture-add-btn" onClick={()=>{itemAdd(item.id)}}>+</button> }
                    {item.count!=0 && <div className="furniture-counter">
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

export default Furniture