export function CartReducer(state, action){
    switch(action.type)
    {
        case "add_to_cart": return{ 
            ...state, cartItems: [...state.cartItems, action.payload] 
        }
        case "remove_to_cart": return{
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
     
         }
    }

}