export const personReducer=(state='',action)=>{
    switch (action.type) {
        case "CLEAR_INPUT":return action.payload;
        case "SET_PERSON":return action.payload;
            
        default: return state;
    }
}