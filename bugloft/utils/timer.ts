
export default function timer(time) {
  const timestamp = +new Date(time) / 1000;

  var curTimestamp = Number(new Date().getTime() / 1000); //Current timestamp
  var timestampDiff = curTimestamp - timestamp; // The number of seconds between the parameter timestamp and the current timestamp

  var curDate = new Date(curTimestamp * 1000); // Current time and date object
  var tmDate = new Date(timestamp * 1000); // Date object converted into parameter timestamp

  var Y = tmDate.getFullYear(),
    m = tmDate.getMonth() + 1,
    d = tmDate.getDate();
  var H = tmDate.getHours(),
    i = tmDate.getMinutes();

  if (timestampDiff < 60) { // Within a minute
    return "Just now";
  } else if (timestampDiff < 3600) { // Within an hour
    return Math.floor(timestampDiff / 60) + " minutes ago";
  } else if (curDate.getFullYear() === Y && curDate.getMonth() + 1 === m && curDate.getDate() === d) {
    return 'Nowadays ' + zeroize(H) + ':' + zeroize(i);
  }
  var newDate = new Date((curTimestamp - 86400) * 1000); // The date object converted into the timestamp in the parameter plus one day
  if (newDate.getFullYear() === Y && newDate.getMonth() + 1 === m && newDate.getDate() === d) {
    return 'Yesterday ' + zeroize(H) + ':' + zeroize(i);
  } else if (curDate.getFullYear() === Y) {
    return zeroize(m) + '-' + zeroize(d) + '-' + zeroize(H) + ':' + zeroize(i);
  } 
  return Y + '-' + zeroize(m) + '-' + zeroize(d) + '-' + zeroize(H) + ':' + zeroize(i);

}
function zeroize(num) {
  return (String(num).length === 1 ? '0' : '') + num;
}
