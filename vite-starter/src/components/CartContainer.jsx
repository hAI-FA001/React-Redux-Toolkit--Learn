import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart)
    if (!amount < 1) {
        return <section className="cart">
            <header>
                <h2>your cart</h2>
                <h4 className="empty-cart">is empty</h4>
            </header>
        </section>
    }
  return (
      <section className="cart"><h2>your cart</h2>
          <div>
              {cartItems.map((ci) => <CartItem key={ci.id} {...ci} />)}
          </div>
          <footer>
              <hr />
              <div className="cart-total"><h4>Total <span >${total}</span></h4></div>
              <button type='button' className="btn clear-btn">clear cart</button>
          </footer>
      </section>
  )
}

export default CartContainer