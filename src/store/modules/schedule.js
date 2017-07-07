import * as actionTypes from '@/store/actionTypes'
import { FAKE_SCHEDULE_FETCHING_DELAY } from '@/consts'

const SCHEDULE_SET_DATA = 'SCHEDULE_SET_DATA'
const SCHEDULE_SET_LOADING_STATUS = 'SCHEDULE_SET_LOADING_STATUS'

export default {
  state: {
    data: [],
    loading: true
  },

  actions: {
    [actionTypes.REQUEST_SCHEDULE] ({ commit, dispatch }, schedule) {
      commit(SCHEDULE_SET_LOADING_STATUS, true)

      // Делаем вид, что тянем по сети (Задержка перед установкой значения data)
      setTimeout(() => {
        dispatch(actionTypes.SETUP_SCHEDULE, schedule)
        commit(SCHEDULE_SET_LOADING_STATUS, false)
      }, FAKE_SCHEDULE_FETCHING_DELAY)
    },
    [actionTypes.SETUP_SCHEDULE] ({ commit, dispatch }, schedule) {
      commit(SCHEDULE_SET_DATA, schedule)
    }
  },

  mutations: {
    [SCHEDULE_SET_DATA] (state, schedule) {
      state.data = schedule
    },
    [SCHEDULE_SET_LOADING_STATUS] (state, loading) {
      state.loading = loading
    }
  }
}
