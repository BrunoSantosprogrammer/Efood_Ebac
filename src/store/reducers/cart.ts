import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../pages/Home'

type CartState = {
  items: Restaurants
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const { id } = action.payload
      state.items.cardapio.push(id)
  }
}
})
