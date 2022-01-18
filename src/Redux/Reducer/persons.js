export const personsReducer=(state=[],action)=>{
    debugger
    switch (action.type) {
        case "ADD_PERSON":return [...action.payload];
        case "UPDATE_PERSON":return [...action.payload];
        case "DELETE_PERSONS":return [...action.payload];
    
        default: return state;
    }
}