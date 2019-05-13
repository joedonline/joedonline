export const setTime = () => {
  let d = new Date()
  let h = d.getHours().toString()
  let m = d.getMinutes().toString()
  let s = d.getSeconds().toString()
  let dayOfWeek = d.getDay()
  const radix = 10

  if (m.length===1) {
    m = '0'.concat(m)
  }

  if (s.length===1) {
    s = '0'.concat(s)
  }

  let timeOfDay
  if (parseInt(h, radix)>20) {
    timeOfDay = 'night'
  } else if (parseInt(h, radix)>17) {
    timeOfDay = 'evening'
  } else if (parseInt(h, radix)>12) {
    timeOfDay = 'afternoon'
  } else if (parseInt(h, radix)===12) {
    timeOfDay = 'noon'
  } else if (parseInt(h, radix)>0 && parseInt(h, radix)<12) {
    timeOfDay = 'morning'
  } else if (parseInt(h, radix)===0) {
    timeOfDay = 'midnight hour'
  } else {
    timeOfDay = '---'
  }

  let hour = 12 - parseInt(h, radix)
  if (hour<0) hour *= -1
  else {
    hour = parseInt(h, radix)
    if (hour===0) hour = 12
  }

  let hours = d.getHours()
  let meridian = hours >= 12 ? 'pm' : 'am'

  dayOfWeek = dayOfWeek === 0 ? 'sun' :
              dayOfWeek === 1 ? 'mon' :
              dayOfWeek === 2 ? 'tue' :
              dayOfWeek === 3 ? 'wed' :
              dayOfWeek === 4 ? 'thu' :
              dayOfWeek === 5 ? 'fri' :
              dayOfWeek === 6 ? 'sat'
              : '---'

  return {
    hour: hour,
    minute: m,
    second: s,
    timeOfDay: timeOfDay,
    dayOfWeek: dayOfWeek,
    meridian: meridian,
    hours: hours
  }

}  // END setTime


export const { hour, minute, second, timeOfDay, dayOfWeek, meridian, hours } = setTime()
