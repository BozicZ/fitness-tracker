import axios from "axios";

const addStepsStarted = () => ({
  type: "ADD_STEPS_STARTED",
  payload: { loading: true }
});

const addStepsCompleted = payload => ({
  type: "ADD_STEPS_COMPLETED",
  payload
});

export const addSteps = () => {
  return dispatch => {
    dispatch(addStepsStarted());
    axios.get(`https://api.myjson.com/bins/1gwnal`).then(res => {
      const info = res.data;
      dispatch(addStepsCompleted(info));
    });
  };
};
