import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../pages/Home'

type CartState = {
  items: Restaurants[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurants>) => {
      const products = state.items.find((item) => item.cardapio)

      if (!products) {
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
