import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProductIds: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cartProductIds = [...state.cartProductIds, action.payload];
		},
		removeFromCart: (state, action) => {
			state.cartProductIds = state.cartProductIds.filter(
				(id) => id !== action.payload
			);
		},
		clearAllFromCart: (state) => {
			state.cartProductIds = [];
		},
	},
});

export default cartSlice;
