import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import CartContext from '../../context/CartContext'

const Contact = () => {
  ;<CartContext.Consumer>
    {value => {
      const {lightTheme} = value
      const color = lightTheme ? '#000000' : '#ffffff'
      return (
        <div>
          <h1 color={`${color}`}> CONTACT US</h1>
          <div>
            <BsFacebook />
            <AiFillTwitterCircle />
            <TiSocialLinkedinCircular />
          </div>
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </div>
      )
    }}
  </CartContext.Consumer>
}
export default Contact
