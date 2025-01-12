import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { closeModal } from "../features/modal/modalSlice"

const Modal = () => {
    const dispatch = useDispatch()

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Do you want to remove all items from cart?</h4>
                <div className="btn-container">
                    <button type='button' className="btn confirm-btn" onClick={(e) => {
                        dispatch(clearCart())
                        dispatch(closeModal())  // need to close modal too
                    }}>confirm</button>
                    <button type='button' className="btn clear-btn" onClick={(e) => {
                        dispatch(closeModal())
                    }}>cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal