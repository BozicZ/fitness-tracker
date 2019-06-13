const sampleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SAMPLE_ASYNC_STARTED':
            return { ...state, loading: true }
        case 'ADD_SAMPLE_ASYNC_COMPLETE':
            return { ...state, sampleAsync: action.payload, loading: false }
        default: return state
    }
}
export default sampleReducer
