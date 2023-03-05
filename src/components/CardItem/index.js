// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsItems} = props
  const {title, description, imgUrl, className} = cardsItems
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} className="img" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
