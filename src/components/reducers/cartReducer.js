import {ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/action-types/cart-actions'

const initState = {
    addedItems:[
    ],
    total: 0
}
const cartReducer= (state = initState,action)=>{

   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        console.info("ADD_TO_CART0");
             console.info(action);
             console.info(state);

             //UPDATE TOTAL
             let newTotal=0;
             if(isNaN(state.total)){
                 newTotal=action.item.quantity*action.item.ticket.ticketPricingAmount;
             }else{
                 newTotal=(state.total+(action.item.quantity*action.item.ticketdata.ticketPricingAmount));
             }

             console.info(newTotal);

             //ADD TO ITEMS
             const newItem={
                 quantity:action.item.quantity,
                ticket:action.item.ticketdata,
                 product:action.item.productdata
             }
             return{
                 ...state,
                 addedItems: [...state.addedItems, newItem],
                 total : newTotal
             }


             /*

          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {

             return{
                 ...state,
                addedItems: [...state.addedItems, action.item]
                  }
        }
         else{
             console.info("ADD_TO_CART");
             console.info(action);

             console.info(state);
           // addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + action.item.ticketPricingAmount;
            
            return{
                ...state,
                addedItems: [...state.addedItems, action.item],
                total : newTotal
            }
            
        }
        */
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }


    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

    return state
}
export default cartReducer;