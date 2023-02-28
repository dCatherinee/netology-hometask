import moment from "moment";

function getPrettyDate(date) {
  const currDate = moment();
  const propsDate = moment(date);
  const result = moment.duration(currDate.diff(propsDate));

  let minutes = result._milliseconds / 1000 / 60;
  let hours = minutes / 60;
  let days = hours / 24;

  minutes = Math.round(minutes);
  hours = Math.round(hours);
  days = Math.round(days);

  console.log(
    "milli - " +
      result._milliseconds +
      " / minutes - " +
      minutes +
      " / hours - " +
      hours +
      " / days - " +
      days
  );

  if (days === 0 && hours === 0) {
    return (
      minutes +
      " " +
      declOfNum(minutes, ["минута", "минуты", "минут"]) +
      " назад"
    );
  } else if (days === 0 && hours > 0 && hours < 25) {
    return hours + " " + declOfNum(hours, ["час", "часа", "часов"]) + " назад";
  } else if (days > 0) {
    return days + " " + declOfNum(days, ["день", "дня", "дней"]) + " назад";
  }
}

function declOfNum(num, words) {
  let n = Math.abs(num) % 100;
  let n1 = n % 10;

  if (n > 10 && n < 20) {
    return words[2];
  }
  if (n1 > 1 && n1 < 5) {
    return words[1];
  }
  if (n1 === 1) {
    return words[0];
  }

  return words[2];
}

export default getPrettyDate;
