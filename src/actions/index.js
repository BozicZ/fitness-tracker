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
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];

      const days = res.data.map(item => {
        return {
          day: new Date(item.timestamp).getDate(),
          steps: item.steps,
          month: months[new Date(item.timestamp).getMonth()],
          year: new Date(item.timestamp).getFullYear(),
          dayName: dayNames[new Date(item.timestamp).getDay() - 1]
        };
      });

      const result = days.reduce((acc, current) => {
        const currDate = acc.find(item => item.day === current.day);
        if (!currDate) {
          return acc.concat([current]);
        } else {
          acc.splice(acc.length - 1, 1, {
            day: current.day,
            steps: currDate.steps + current.steps,
            month: current.month,
            year: current.year,
            dayName: current.dayName
          });
          return acc;
        }
      }, []);

      dispatch(addStepsCompleted(result));
    });
  };
};

export const addSelectedDay = payload => ({
  type: "ADD_SELECTED_DAY",
  payload
});
