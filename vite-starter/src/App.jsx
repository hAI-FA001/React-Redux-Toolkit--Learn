import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  
  return <main>
    <Modal />
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
