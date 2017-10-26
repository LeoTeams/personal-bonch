<template>
  <transition name="slide-fade">
    <div class="side-bar" v-show="isSideBarVisible" :class="{ 'fixed': fixed }">
      <div class="header">
        <icon @click="close" name="close" :width="closeIconSize" :height="closeIconSize" class="to-the-end" />
      </div>
      <profile-preview v-if="!isWideScreen" :horizontal="false" />
      <side-menu></side-menu>
    </div>
  </transition>
</template>

<script>
import * as actionTypes from '@/store/actionTypes'
import Icon from '@/components/UI/Icon'

import ProfilePreview from '../Header/ProfilePreview'

import Menu from './Menu'

export default {
  name: 'side-bar',
  components: {
    'icon': Icon,
    'profile-preview': ProfilePreview,
    'side-menu': Menu
  },
  data () {
    return {
      fixed: false
    }
  },
  watch: {
    isSideBarVisible (newValue, oldValue) {
      this.fixed = this.isWideScreen ? !newValue : true
    }
  },
  computed: {
    closeIconSize () {
      return this.isWideScreen ? 12 : 16
    },
    isWideScreen () {
      return this.$store.getters.platform !== 'mobile'
    },
    isSideBarVisible () {
      return this.$store.getters.isSideBarVisible
    }
  },
  methods: {
    close () {
      this.$store.dispatch(actionTypes.TOGGLE_SIDEBAR)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../styles/config.styl"

  .side-bar
    width 250px
    height 100%
    background-color #fff
    z-index 200
    box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  .side-bar.fixed
    position fixed

  .side-bar .header
    height 60px
    display flex
    align-items center

  .to-the-end
    margin-left auto
    margin-right 20px

  .slide-fade-enter-active
    transition all .2s ease

  .slide-fade-leave-active
    transition all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-fade-enter, .slide-fade-leave-to
    transform translateX(-10px)
    opacity: 0

</style>
