export const initialState  = {
    basket: [],
    user: null
}


//selector
export const getBasketTotal = (basket) => basket?.reduce((amt, item) => item.price + amt, 0);

export const getUserDetails = () => initialState.user?.email;

export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_ITEM':
            let idx = state.basket.findIndex((item) => item.id == action.id);
            let newBasket = [...state.basket];
            if (idx > -1) {
                newBasket.splice(idx, 1);
            } 
           return {
               ...state,
               basket: newBasket
           }
        case 'SET_USER':
           return {
               ...state,
               user: action.user
           }
        case 'default':
            return {state}
    }
}