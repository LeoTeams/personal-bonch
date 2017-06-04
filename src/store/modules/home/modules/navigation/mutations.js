import {
  ADD_LINK,
  REMOVE_LINK,
  CHANGE_LINK_PRIORITY,
  CHANGE_MOST_USED_COUNT
} from './mutation-types'

export default {

  [ADD_LINK] (state, {link, name}) {
    if (!name) name = link
    state.links.set(link, name)
  },

  [REMOVE_LINK] (state, link) {
    state.links.delete(link)
  },

  [CHANGE_LINK_PRIORITY] (state, link, priorityDirection = 0) {
    let index = 0
    for (let [key] of state.links) {
      if (key === link) { break } else index++
    }
    if (index === state.links.length) return
    let newIndex = priorityDirection + index
    if (newIndex < 0) { newIndex = 0 } else if (newIndex > state.links.length - 1) { newIndex = state.links.length }
    if (index === newIndex) return
    let k = 0
    let newLinks = new Map()
    for (let [key, value] of state.links) {
      if (k === newIndex) { newLinks.set(key, value) }
      if (k !== index) { newLinks.set(key, value) }
      k++
    }
    state.links = newLinks
  },
  [CHANGE_MOST_USED_COUNT] (state, count = 4) {
    if (typeof count === Number) { state.mostUsedCount = count }
  }
}
