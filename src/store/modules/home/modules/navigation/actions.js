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

export const addLink = wrapToAction(types.ADD_LINK)

export const removeLink = wrapToAction(types.REMOVE_LINK)

export const changeLinkPriority = ({ commit }, link, priorityDirection) => {
  commit(types.CHANGE_LINK_PRIORITY, link, priorityDirection)
}

export const changeMostUsedCount = wrapToAction(types.CHANGE_MOST_USED_COUNT)

export default {
  addLink,
  removeLink,
  changeLinkPriority,
  changeMostUsedCount
}
