export const clearFullnameInput=()=>{
    return async (dispatch)=>{
        return await dispatch({type:"CLEAR_NAME_INPUT",payload:""})
    }
}

export const setFullnamePerson=(e)=>{
    debugger
    return async (dispatch)=>{
        return await dispatch({type:"SET_FULLNAME_PERSON",payload:e.target.value})
    }
}