import "./Shop.scss"
import shop1 from "../../img/shop1.png"
import shop2 from "../../img/shop2.png"
import shop3 from "../../img/shop3.png"
import shop4 from "../../img/shop4.png"

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="container">
        <ul>
          <li>
            <img src={shop1} alt="" />
            <span>
              <h4>experiences</h4>
              <h1>we provide you the best experience</h1>
              <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
              <a href="#about">More Info</a>
            </span>
          </li>
          <li>
            <span>
              <h4>Materials</h4>
              <h1>Very serious materials for making furniture</h1>
              <p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
              <a href="#about">More Info</a>
            </span>
            <div className="img-wrapper">
            <span>
              <img src={shop2} alt="" />
              <img src={shop3} alt="" />
            </span>
            <img src={shop4} alt="" />
            </div>
 
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Shop