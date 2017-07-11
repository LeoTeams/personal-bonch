import * as actionTypes from '../actionTypes'

import staticProfileData from './profile.json'
import subjects from './subjects.json'

import families from './families.json'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const generateSchedule = () => {
  const letters = 'АБВГДЕЗИКЛМНОПРСТУФЭЮЯ'
  const generateName = () => `${families.data[random(0, families.data.length)]} ${letters.charAt(random(0, letters.length))}. ${letters.charAt(random(0, letters.length))}.`
  const generateCab = () => ({'class': random(100, 550), hull: random(1, 3)})
  const generateType = () => ['Лабораторная работа', 'Лекция', 'Практические занятия'][random(0, 3)]
  let times = {
    begin: ['9:00', '10:45', '13:00', '14:45', '16:35'],
    end: ['10:35', '12:20', '14:35', '16:20', '18:05']
  }
  const getTime = (index) => ({begin: times.begin[index], end: times.end[index]})

  // don't try fix this code, jsvm garbage collector clear arrays if use new Array().map
  let dayOfMonth = 1
  const weeks = []
  Array.from(new Array(random(18, 25)), () => {
    const week = []
    Array.from(new Array(5), () => {
      const day = {dayOfMonth, lessons: []}
      dayOfMonth = ++dayOfMonth > 31 ? 1 : dayOfMonth
      Array.from(new Array(random(2, 6)), (_, index) => {
        day.lessons.push({
          title: subjects.data[random(0, subjects.data.length)],
          teacher: generateName(),
          time: getTime(index),
          room: generateCab(),
          type: generateType()
        })
      })
      week.push(day)
    })
    weeks.push(week)
  })
  return weeks
}

export default function createDataGeneratorPlugin () {
  return store => {
    store.dispatch(actionTypes.SETUP_USER_PROFILE, Object.assign({}, staticProfileData, {
      rating: [random(100, 600), random(700, 3000)],
      attestatedSubjects: subjects.data.sort(() => Math.random() - 0.5).slice(0, random(0, subjects.data.length))
    }))
    const schedule = generateSchedule()
    const current = random(0, schedule.length - 1)
    store.dispatch(actionTypes.REQUEST_SCHEDULE, {schedule, current})
  }
}
