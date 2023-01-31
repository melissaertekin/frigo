import { createSlice } from "@reduxjs/toolkit";

const myFrigoSlice = createSlice({
    name: "myfrigo",
    initialState: {
        productList: [],
        totalQuantity: 0,
    },
    reducers:{
        addToMyFrigo(state,action){
            const newProduct = action.payload;

            // check if product already existe
            const existItem = state.productList.find((product)=> product.id === newProduct.id);

            if(existItem)
            {
                existItem.quantity++;
            }
            else
            {
                state.productList.push({
                    id: newProduct.id,
                    quantity: 1,
                    name: newProduct.name,
                    productImg: newProduct.productImg,
                  })
                  state.totalQuantity++;
            }

        }
    }
})

export const myFrigoActions = myFrigoSlice.actions;

export default myFrigoSlice;