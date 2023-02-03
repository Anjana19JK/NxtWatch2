import CartContext from '../../context/CartContext'

const ErrorImage = () => {
  ;<CartContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <div>
          {lightTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="refresh"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="refresh"
            />
          )}
          <div>
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button">Retry</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
}
export default ErrorImage
