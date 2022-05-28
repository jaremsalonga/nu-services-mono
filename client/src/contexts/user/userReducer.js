
export const reducer = (state, action) => {
    switch (action.type) {
        case "setUser":
            state.user = action.payload;
        default:
            return state
    }
}

export const initialState = {
    user: null
}