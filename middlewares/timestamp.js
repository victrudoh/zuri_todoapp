let date = new Date();
let stamp;

const getTimeStamp = () => {
  // Current day
  let day = date.getDate();

  // current month
  let month = ("0" + (date.getMonth() + 1)).slice(-2);

  // current year
  let year = date.getFullYear();

  // current hours
  let hours = date.getHours();

  // current minutes
  let minutes = date.getMinutes();

  // current seconds
  let seconds = date.getSeconds();

  stamp = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;

  return stamp;
};

module.exports = {
  stamp,
  getTimeStamp,
};
