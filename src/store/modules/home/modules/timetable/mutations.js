import {Lesson} from './values'

import {
  ADD_LESSON,
  REMOVE_LESSON,
  CHANGE_LESSON,
  ADD_DAY,
  REMOVE_DAY,
  ADD_WEEK,
  REMOVE_WEEK
} from './mutation-types'

export default {

  [ADD_LESSON] (state, {number = 0, day = 0, week = 0, lesson = {}}) {
    state.weeks[week][day][number] = new Lesson(lesson)
  },
  [REMOVE_LESSON] (state, {number = 0, day = 0, week = 0}) {
    state.weeks[week][day][number] = new Lesson()
  },
  [CHANGE_LESSON] (state, {number = 0, day = 0, week = 0, lesson}) {
    state.weeks[week][day][number] = new Lesson(lesson)
  },
  [ADD_DAY] (state, {number = 0, week = 0, day = []}) {
    state.weeks[week][number] = day
  },
  [REMOVE_DAY] (state, {number = 0, week = 0}) {
    state.weeks[week][number] = []
  },
  [ADD_WEEK] (state, {number = 0, week = []}) {
    state.weeks[number] = week
  },
  [REMOVE_WEEK] (state, {number = 0}) {
    state.weeks[number] = []
  }

}
