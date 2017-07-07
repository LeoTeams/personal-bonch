import * as actionTypes from '../actionTypes'

import staticProfileData from './profile.json'
import subjects from './subjects.json'

import families from './families.json'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const generateSchedule = () => {
  const letters = 'АБВГДЕЗИКЛМНОПРСТУФЭЮЯ'
  const generateName = () => `${families.data[random(0, families.data.length)]} ${letters.charAt(random(0, letters.length))}. ${letters.charAt(random(0, letters.length))}.`
  const generateCab = () => `${random(100, 550)}/${random(1, 3)}`
  const generateType = () => ['Лабораторная работа', 'Лекция', 'Практические занятия'][random(0, 3)]
  const getTime = (index) => ['9:00-10:35', '10:45-12:20', '13:00-14:35', '14:45-16:20', '16:30-18:05'][index]

  const weeks = []
  Array.from(new Array(random(18, 25)), () => {
    const week = []
    Array.from(new Array(5), () => {
      const day = []
      Array.from(new Array(random(2, 6)), (_, index) => {
        day.push({
          title: subjects.data[random(0, subjects.data.length)],
          time: getTime(index),
          teacher: generateName(),
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

    store.dispatch(actionTypes.REQUEST_SCHEDULE, generateSchedule())
  }
}
