import {Link} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import CartContext from '../../context/CartContext'
import Contact from '../Contact'

const SideBar = () => {
  ;<CartContext.Consumer>
    {value => {
      const {lightTheme} = value
      const color = lightTheme ? '#000000' : '#ffffff'
      return (
        <div>
          <div>
            <Link to="/">
              <li color={`${color}`}>
                <HiHome className="nav-icons" /> <span>Home</span>
              </li>
            </Link>
            <Link to="/trending">
              <li color={`${color}`}>
                <AiFillFire className="nav-icons" /> <span>Trending</span>
              </li>
            </Link>
            <Link to="/gaming">
              <li color={`${color}`}>
                <SiYoutubegaming className="nav-icons" /> <span>Gaming</span>
              </li>
            </Link>
            <Link to="/saved-videos">
              <li color={`${color}`}>
                <MdPlaylistAdd className="nav-icons" />
                <span>Saved Videos</span>
              </li>
            </Link>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
}
export default SideBar
