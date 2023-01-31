import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        favList: [],
    },
    reducers:{
        addTofavorites(state,action){
            const newRecipe = action.payload;
            state.favList.push({
                id: newRecipe.id,
                name: newRecipe.name,
                recipeImg: newRecipe.recipeImg,
                desc: newRecipe.desc
                })
        }
    }
})

export const recipeActions = recipeSlice.actions;

export default recipeSlice;