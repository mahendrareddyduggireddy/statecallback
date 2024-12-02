import './index.css'

const WebComp = props => {
  const {item} = props
  const {imageUrl, name} = item
  return (
    <li className="li-container">
      <img src={imageUrl} alt={name} height={150} width={150} />
    </li>
  )
}
export default WebComp
