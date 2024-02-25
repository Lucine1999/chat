export const getCronDate = (delay) => {
  const dateToBeScheduled = new Date(Date.now() + delay);
  const seconds = dateToBeScheduled.getSeconds();
  const minutes = dateToBeScheduled.getMinutes();
  const hours = dateToBeScheduled.getHours();
  const day = dateToBeScheduled.getDate();
  const month = dateToBeScheduled.getMonth();
  const weekday = dateToBeScheduled.getDay() - 1;

  return `${seconds} ${minutes} ${hours} ${day} ${month} ${weekday}`;
};
