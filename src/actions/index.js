const addSampleStarted = () => ({
    type: 'ADD_SAMPLE_ASYNC_STARTED',
    payload: { loading: true }
})

const addSampleComplete = payload => ({
    type: 'ADD_SAMPLE_ASYNC_COMPLETE',
    payload
})

export const addSampleAsync = (payload) => {
    return dispatch => {
        dispatch(addSampleStarted());
        setTimeout(() => {
            dispatch(addSampleComplete(payload + ' + some async data'));
        }, 3000);
    };
}
