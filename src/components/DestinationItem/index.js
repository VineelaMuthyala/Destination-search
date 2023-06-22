import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="image-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
