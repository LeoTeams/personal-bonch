import * as types from './mutation-types'

/**
 * Returns action which represent mutation
 * @param {String} type
 * @returns {Function} action
 */
function wrapToAction (type) {
  return ({ commit }, payload) => {
    commit(type, payload)
  }
}

export const addLesson = wrapToAction(types.ADD_LESSON)

export const removeLesson = wrapToAction(types.REMOVE_LESSON)

export const changeLesson = wrapToAction(types.CHANGE_LESSON)

export const addDay = wrapToAction(types.ADD_DAY)

export const removeDay = wrapToAction(types.REMOVE_DAY)

export const addWeek = wrapToAction(types.ADD_WEEK)

export const removeWeek = wrapToAction(types.REMOVE_WEEK)

export default {
  addLesson,
  removeLesson,
  changeLesson,
  addDay,
  removeDay,
  addWeek,
  removeWeek
}
