export const clearInput=()=>{
    return async (dispatch)=>{
        return await dispatch({type="CLEAR_INPUT",payload=""})
    }
}

export const setPerson=(e)=>{
    return async (dispatch)=>{
        return await dispatch({type="SET_PERSON",payload=e.target.value})
    }
}