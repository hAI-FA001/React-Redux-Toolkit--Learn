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
            // state.cartItems = []  // can mutate directly thanks to Immer
            return {...state, cartItems: []}  // don't do: return { cartItems: [] }
        },

        removeItem: (state, action) => {
            console.log(action)

            const itemID = action.payload
            state.cartItems = state.cartItems.filter((it) => it.id !== itemID)
        }
    }
})

console.log(cartSlice)

export default cartSlice.reducer
export const { clearCart, removeItem } = cartSlice.actions