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

      if(existItem){
        existItem.quantity++;
      }else{
        state.productList.push({
          id: newProduct.id,
          quantity: 1,
          name: newProduct.name,
          productImg: newProduct.productImg,
          })
        state.totalQuantity++;
      }
    },
    removeFromMyFrigo(state,action){
      const chosenProduct = action.payload;
      // check if product already existe
      const existItem = state.productList.find((product)=> product.id === chosenProduct.id);

      if(existItem.quantity === 1){
        state.productList = state.productList.filter((item) => item.id !== chosenProduct.id)
        state.totalQuantity --;
      }else{
        existItem.quantity --;
        existItem.totalPrice -= existItem.price;
      }
    },
  }
})

export const myFrigoActions = myFrigoSlice.actions;
export default myFrigoSlice;