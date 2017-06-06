import {Lesson} from './values'

let title = n => `${
  n === 0 ? 'first'
  : n === 1 ? 'second'
  : n === 2 ? 'third'
  : n === 3 ? 'fourth'
  : n === 4 ? 'fifth'
  : 'sixth'
  } lesson`

let teacher = n => `teacher of ${title(n)}`
let week = []
for (let i = 0; i < 6; i++) {
  let day = []
  for (let k = 0; k < 5; k++) {
    day.push(new Lesson({
      title: title(k),
      teacher: teacher(k),
      room: `10${k}/2`,
      type: 'practical lesson '
    }))
  }
  week.push(day)
}

export default {
  weeks: [
    week
  ],
  currentWeek: 0
}
