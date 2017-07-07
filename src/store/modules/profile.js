import * as actionTypes from '@/store/actionTypes'

const PROFILE_SET_DATA = 'SET_PROFILE'

export default {
  state: {
    data: {}
  },

  actions: {
    [actionTypes.SETUP_USER_PROFILE] ({ commit, rootGetters }, profile) {
      commit(PROFILE_SET_DATA, profile)
    }
  },

  mutations: {
    [PROFILE_SET_DATA] (state, profile) {
      state.data = profile
    }
  }
}
