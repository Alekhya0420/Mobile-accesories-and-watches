import {createSlice} from "@reduxjs/toolkit";
import productData from "../../productData/productData";
import { updateCart,getCart } from "../../api2/api2";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchCartData = createAsyncThunk('cart/fetchCartData', async (userId) => {
    const cart = await getCart(userId); 
    return cart; 
});

const initialState=
{
    cart:[],
    items:productData,
    totalQuantity:0,
    totalPrice:0,
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
        let find=state.cart.findIndex((item)=>item.id===action.payload.id);
        if(find>=0)
        {
         state.cart[find].quantity +=1;
        }
        else
        {    
            state.cart.push(action.payload);
        }
        updateCart(action.payload.userId, state.cart);
        },

        getCartTotal:(state,action)=>{
            let{ totalQuantity,totalPrice}=state.cart.reduce(
                (cartTotal,cartItem)=>{
                    console.log("carttotal and cartitem",cartTotal,cartItem);
                    cartTotal.totalQuantity += cartItem.quantity;
                    cartTotal.totalPrice += cartItem.price * cartItem.quantity;
                    return cartTotal; 
                },
                {
                    totalQuantity:0,
                    totalPrice:0
                }
            );
            state.totalPrice=parseInt(totalPrice.toFixed(2));
            state.totalQuantity=totalQuantity
 
            if(state.userId)
            {    
            updateCart(action.payload.userId, state.cart);
            }
        },

        addItemToCart: (state, action) => {
            const item = state.cart.find((cartItem) => cartItem.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 }); 
            }

            updateCart(action.payload.userId, state.cart);
        },

        removeItemCart: (state, action) => {
            const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id);
            
            if (itemIndex!==-1) {
                const item = state.cart[itemIndex];
                
                if (item.quantity > 1) 
                {
                    item.quantity -= 1;
                } else 
                {
                    state.cart.splice(itemIndex, 1);
                }
            }
            updateCart(action.payload.userId, state.cart);
        },

        destroyItemCart:(state,action)=>{

        
        const itemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id);
        if(itemIndex!==-1)
        {
            state.cart.splice(itemIndex,1)
            //console.log("index is",itemIndex)
        }
        updateCart(action.payload.userId, state.cart);

        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCartData.fulfilled, (state, action) => {
            state.cart = action.payload || [];  // Set cart data from API response
            state.totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
            state.totalPrice = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        });
    },
    
});

export const {addTocart,getCartTotal,addItemToCart,removeItemCart,destroyItemCart} = cartSlice.actions;
export default cartSlice.reducer;