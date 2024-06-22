import "./About.scss"
import Reviews from "../../data/Reviews.jsx";
import star from "../../img/aboutStar.svg"
import noStar from "../../img/aboutNoStar.svg"

function About() {
  function returnStars(rating){
    let stars=[];
    for(let i=0;i<rating;i++){
      stars.push(<img src={star} key={i}></img>)
    }
    for(let i=0;i<5-rating;i++){
      stars.push(<img src={noStar} key={6-i}></img>)
    }
    return stars;
  }
  return (
    <section className="about" id="about">
      <div className="container">
        <h4>Testimonials</h4>
        <h1>Our Client Reviews</h1>
        <ul>
          {
            Reviews.map((review,index)=>(
              <li style={{backgroundImage: `url(${review.bgImg})`}} key={index}>
                <div className="about-img-wrapper">
                  <img src={review.profileImg} alt="" className="about-img" />
                </div>
                <div className="about-text-wrapper">
                  <h2>{review.firstname}</h2>
                  <h3>{review.lastname}</h3>
                  <p>{review.comment}</p>
                  <span>{returnStars(review.rating)}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default About