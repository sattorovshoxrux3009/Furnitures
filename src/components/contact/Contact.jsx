import "./Contact.scss"
import facebook from "../../img/facebook.svg"
import twitter from "../../img/twitter.svg"
import instagram from "../../img/instagram.svg"

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <ul>
          <li>
            <h1>Furnitures</h1>
            <h4>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</h4>
          </li>
          <li>
            <h3>Services</h3>
            <a href="#"><h4>Email Marketing</h4></a>
            <a href="#"><h4>Campaigns</h4></a>
            <a href="#"><h4>Branding</h4></a>
          </li>
          <li>
            <h3>Furniture</h3>
            <a href="#furniture"><h4>Beds</h4></a>
            <a href="#furniture"><h4>Chair</h4></a>
            <a href="#furniture"><h4>All</h4></a>
          </li>
          <li>
            <h3>Follow Us</h3>
            <a href="#"><img src={facebook} alt="" /><h4>Facebook</h4></a>
            <a href="#"><img src={twitter} alt="" /><h4>Twitter</h4></a>
            <a href="#"><img src={instagram} alt="" /><h4>Instagram</h4></a>
          </li>
        </ul>
        <div>
          <p>Copyright © 2024</p>
          <span>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact