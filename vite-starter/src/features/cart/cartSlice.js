import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', () => fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
)

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
        },

        // destructure payload
        increase: (state, { payload }) => {
            const item = state.cartItems.find((it) => it.id === payload.id)
            item.amount++
        },

        decrease: (state, { payload }) => {
            const item = state.cartItems.find((it) => it.id === payload.id)
            item.amount--
        },

        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((it) => {
                amount += it.amount;
                total += it.amount * it.price;
            })

            state.amount = amount
            state.total = total
        }
    },

    extraReducers: {
        [getCartItems.pending]: (state) => {
            console.log('pending...')
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            // action.payload contains API response
            console.log('Got items: ', action.payload)
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state) => {
            console.log('Error occurred')
            state.isLoading = false
        },
    }
})

console.log(cartSlice)

export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions