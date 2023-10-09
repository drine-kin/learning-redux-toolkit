import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		products: productSlice.reducer,
	},
});

export default store;
