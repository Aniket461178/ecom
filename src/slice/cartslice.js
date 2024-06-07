import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  cart: [],
  cnt: 0,
}

export const cartSlice = createSlice({
  name: 'managecart',
  initialState,
  git init
  reducers: {
    addtosave: (state, action) => {
      let modify = action.payload
      modify.qty = 1
      modify.total = modify.price
      let temp = [...state.cart, modify]
      state.cart = temp
    },
  },
  minuse: (state) => {
    if (state.cnt < 20) {
      state.cnt += 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtosave, minuse } = cartSlice.actions

export default cartSlice.reducer