export const personAgeReducer=(state='',action)=>{
    
    switch (action.type) {
        case "CLEAR_AGE_INPUT":return action.payload;
        case "SET_AGE_PERSON":return action.payload;
            
        default: return state;
    }
}