

export default function useGetCurrentTime() {
  let time = new Date()
  let [day, month, year, hour, minute, seconds] = [time.getDate(), time.getMonth() + 1, time.getFullYear(), time.getHours(), time.getMinutes(), time.getSeconds()]

  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  seconds = seconds < 10 ? '0' + seconds : seconds

  let currentTime = day + "." + month + "." + year + "  " + hour + ":" + minute + ":" + seconds

  return currentTime
}

