export const personFullnameReducer=(state='',action)=>{
    
    switch (action.type) {
        case "CLEAR_FULLNAME_INPUT":return action.payload;
        case "SET_FULLNAME_PERSON":return action.payload;
            
        default: return state;
    }
}