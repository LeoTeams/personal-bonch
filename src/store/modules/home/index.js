import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import navigation from './modules/navigation'
import timetable from './modules/timetable'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,

  modules: {
    navigation,
    timetable
  }
}
