function sortByDate(array) {
  array.sort(function (a, b) {
    let date1 = a.date.split(".");
    let date2 = b.date.split(".");

    return (
      new Date(date2[2], date2[1], date2[0]) -
      new Date(date1[2], date1[1], date1[0])
    );
  });
}

export default sortByDate;
