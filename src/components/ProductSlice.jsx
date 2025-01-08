import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product:[],
    exitFoodInCard:false
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addToProduct: (state,action) => {
            const isFindProduct = state.product.find((item) => item.id == action.payload.id)
            if(!isFindProduct){
                state.product.push(action.payload);
                state.exitFoodInCard= true;
            } else {
                alert("This product is already in the cart!");
                state.exitFoodInCard = state.product.length > 0;
              }
        },
        deleteToCard:(state,action) =>{
            state.product = state.product.filter((item) => item.id != action.payload)
        },
        incrementQuantity:(state,action) => {
            const products = state.product.find((item) => item.id === action.payload)
            if(products){
                products.quantity += 1;
            }
        },
        decrementQuantity:(state,action) => {
            const products = state.product.find((item) => item.id === action.payload)
            if(products && products.quantity > 1){
                products.quantity -= 1
            }
        },
    }

})
export const {addToProduct,deleteToCard, incrementQuantity,decrementQuantity}  = productSlice.actions
export default productSlice.reducer