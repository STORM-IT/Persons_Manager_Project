export const clearAgeInput = () => {
    return async (dispatch) => {
        await dispatch({ type: "CLEAR_AGE_INPUT", payload: "" })
    }
}

export const setAgePerson = (e) => {
    return async (dispatch) => {
        await dispatch({ type: "SET_AGE_PERSON", payload: e.target.value })
    }
}