import {CLEAR_CART, ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, UPDATE_QUANTITY} from '../actions/action-types/cart-actions'

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

    if(action.type===CLEAR_CART){

        console.info("CLEAR CART");

        return{
                 ...state,
                 addedItems: [],
                 total : 0
             }
    }
    if(action.type === REMOVE_ITEM){


        const filteredItems = state.addedItems.slice(0, action.item).concat(state.addedItems.slice(action.item + 1, state.addedItems.length))

        //calculating the total
       let newTotal = state.total - (state.addedItems[action.item].quantity * state.addedItems[action.item].product.eventPricing[0].ticketPricingAmount )
         
        return{
            ...state,
            addedItems: filteredItems,
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

    if(action.type === UPDATE_QUANTITY){
        //update
        console.info(action);

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