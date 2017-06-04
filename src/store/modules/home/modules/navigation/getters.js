
export default {
  mostUsed (state) {
    let i = 0
    let result = new Map()
    for (let [key, value] of state.links) {
      if (i === state.mostUsedCount) { break }
      result.set(key, value)
      i++
    }
    return result
  },
  others (state) {
    let i = 0
    let result = new Map()
    for (let [key, value] of state.links) {
      if (i >= state.mostUsedCount) { result.set(key, value) }
      i++
    }
    return result
  }
}
