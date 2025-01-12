import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []  // can mutate directly thanks to Immer
        }
    }
})

console.log(cartSlice)

export default cartSlice.reducer
export const { clearCart } = cartSlice.actions