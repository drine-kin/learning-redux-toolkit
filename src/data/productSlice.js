import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "./productList.json";

export const fetchAllProducts = createAsyncThunk(
	"fetch-all-product",
	async (apiURL) => {
		const response = await fetch(apiURL);
		return response.json();
	}
);

const productSlice = createSlice({
	name: "products",
	initialState: {
		data: [],
		fetch_status: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.fetch_status = "success";
			})
			.addCase(fetchAllProducts.pending, (state) => {
				state.fetch_status = "loading";
			})
			.addCase(fetchAllProducts.rejected, (state) => {
				state.data = productList.products;
				state.fetch_status = "error";
			});
	},
});

export default productSlice;
