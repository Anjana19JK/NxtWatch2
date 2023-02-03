import React from 'react'

const CartContext = React.createContext({
  lightTheme: true,
  toggleTheme: () => {},
  vedioList: [],
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
})

export default CartContext
