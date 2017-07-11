import * as actionTypes from '@/store/actionTypes'
import { FAKE_SCHEDULE_FETCHING_DELAY } from '@/consts'

const SCHEDULE_SET_DATA = 'SCHEDULE_SET_DATA'
const SCHEDULE_SET_LOADING_STATUS = 'SCHEDULE_SET_LOADING_STATUS'
const SCHEDULE_SET_CURRENT_WEEK = 'SCHEDULE_SET_CURRENT_WEEK'

export default {
  state: {
    data: [],
    loading: true,
    currentWeek: 0
  },

  actions: {
    [actionTypes.REQUEST_SCHEDULE] ({ commit, dispatch }, {schedule, current}) {
      commit(SCHEDULE_SET_LOADING_STATUS, true)
      // Делаем вид, что тянем по сети (Задержка перед установкой значения data)
      setTimeout(() => {
        dispatch(actionTypes.SETUP_SCHEDULE, schedule)
        commit(SCHEDULE_SET_CURRENT_WEEK, current)
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
    },
    [SCHEDULE_SET_CURRENT_WEEK] (state, current) {
      state.currentWeek = current
    }
  }
}
