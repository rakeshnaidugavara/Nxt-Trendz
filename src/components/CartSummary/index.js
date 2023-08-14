import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const noOfItems = cartList.length
      const amountsArray = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      let totalAmount = 0
      const sumOfAmounts = item => {
        totalAmount += item
      }
      amountsArray.forEach(sumOfAmounts)
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-text-container">
            <h1 className="order-total-heading">
              Order Total:
              <span className="order-total-amount"> Rs {totalAmount}/- </span>
            </h1>
            <p className="no-of-cart-item">{noOfItems} items in cart</p>
          </div>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
