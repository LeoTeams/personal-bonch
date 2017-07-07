import Vue from 'vue'
import Vuex from 'vuex'

import createDataGeneratorPlugin from './plugins/generator'

import ui from './modules/ui'
import profile from './modules/profile'
import schedule from './modules/schedule'

import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const generator = createDataGeneratorPlugin()

export default new Vuex.Store({
  modules: {
    ui,
    profile,
    schedule
  },
  getters,
  plugins: [generator],
  strict: debug
})
