import { configureStore } from "@reduxjs/toolkit";
import myFrigoSlice from "./myFrigoSlice";
import recipeSlice from "./recipeSlice";

const store = configureStore({
	reducer: {
		myfrigo: myFrigoSlice.reducer,
		recipe: recipeSlice.reducer,
	}
})

export default store;