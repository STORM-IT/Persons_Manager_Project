export const clearFullnameInput = () => {
    return async (dispatch) => {
        return await dispatch({ type: "CLEAR_FULLNAME_INPUT", payload: "" })
    }
}

export const setFullnamePerson = (e) => {
    return async (dispatch) => {
        return await dispatch({ type: "SET_FULLNAME_PERSON", payload: e.target.value })
    }
}