import {
  ADD_STEPS_STARTED,
  ADD_STEPS_COMPLETED,
  ADD_SELECTED_DAY
} from "../constants/actionsConstants";

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_STEPS_STARTED:
      return { ...state, loading: true };
    case ADD_STEPS_COMPLETED:
      return { ...state, steps: action.payload, loading: false };
    case ADD_SELECTED_DAY:
      return { ...state, selecdetDay: action.payload };
    default:
      return state;
  }
};
export default sampleReducer;
