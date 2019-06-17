export const formatTimeString = timeString => {
  return timeString.toISOString().substr(11, 5);
};

export const calcCalories = steps => steps / 20;

export const calcDistance = steps => (steps * 0.762) / 1000;

export const roundToHour = time => {
  const hour = time[0] === "0" ? time[1] : time.slice(0, 2);
  let remainder = time.substr(3, 2);
  remainder = remainder[0] === "0" ? remainder[1] : remainder;
  const timeValue = `${hour}.${(remainder / 60)
    .toFixed(2)
    .toString()
    .substr(2, 2)}`;
  return timeValue;
};
