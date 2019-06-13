const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_STEPS_STARTED":
      return { ...state, loading: true };
    case "ADD_STEPS_COMPLETED":
      return { ...state, steps: action.payload, loading: false };
    default:
      return state;
  }
};
export default sampleReducer;
