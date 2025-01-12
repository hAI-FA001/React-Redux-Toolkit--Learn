const Modal = () => {
  return (
      <aside className="modal-container">
          <div className="modal">
              <h4>Do you want to remove all items from cart?</h4>
              <div className="btn-container">
                  <button type='button' className="btn confirm-btn">confirm</button>
                  <button type='button' className="btn clear-btn">cancel</button>
              </div>
          </div>
    </aside>
  )
}

export default Modal