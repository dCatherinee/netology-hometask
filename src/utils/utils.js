function getDateByZone(currDate, zone) {
  let currDateOffset = currDate.getTimezoneOffset();
  let currTime = currDate.getTime();

  let zoneHour = Number(zone.time.slice(1, 3));
  let zoneMinute = Number(zone.time.slice(4));

  if (zone.time[0] === "-") {
    let deviation = 60 * zoneHour + zoneMinute + Math.abs(currDateOffset);
    return new Date(currTime - deviation * 60 * 1000);
  } else if (zone.time[0] === "+") {
    let deviation = 60 * zoneHour + zoneMinute - Math.abs(currDateOffset);
    return new Date(currTime + deviation * 60 * 1000);
  }
}

function clock(zone) {
  const currDate = new Date();
  const date = getDateByZone(currDate, zone);

  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export default clock;
