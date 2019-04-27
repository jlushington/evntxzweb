import {CLEAR_CART, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

export const clearCart = (item)=>{
    return {
        type: CLEAR_CART
    }
}

//add cart action
export const addToCart= (item)=>{
    return{
        type: ADD_TO_CART,
        item
    }
}
//remove item action
export const removeItem=(item)=>{
    return{
        type: REMOVE_ITEM,
        item
    }
}
//subtract qt action
export const subtractQuantity=(item)=>{
    return{
        type: SUB_QUANTITY,
        item
    }
}
//add qt action
export const addQuantity=(item)=>{
    return{
        type: ADD_QUANTITY,
        item
    }
}