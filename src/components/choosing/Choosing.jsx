import "./Choosing.scss"

function choosing() {
    const data=[
        {
            title:'Luxury facilities',
            text:"The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
        },
        {
            title: "Affordable Price",
            text: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
        },
        {
            title: "Many Choices",
            text: "We provide many unique work space choices so that you can choose the workspace to your liking."
        }
    ]

  return (
    <div className="choosing">
        <div className="container">
            <h1>Why Choosing Us</h1>
            <ul>
            {
                data.map((item,index)=>(
                <li key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <a href="#about">More info...</a>
                </li>
                ))
            }
            </ul>
        </div>
    </div>
  )
}

export default choosing