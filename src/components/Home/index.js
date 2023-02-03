import {Component} from 'react'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Premium from '../Premium'
import VedioListItems from '../VedioListItems'

import {HomeMainContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {lightTheme} = value
          const theme = lightTheme ? 'dark' : 'light'
        }}
        <HomeMainContainer data-testid="home" theme={theme}>
          <Header />
          <div>
            <SideBar />
            <div>
              <Premium />
              <VedioListItems />
            </div>
          </div>
        </HomeMainContainer>
      </CartContext.Consumer>
    )
  }
}
export default Home
