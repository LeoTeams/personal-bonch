<template>
  <div class="header-bar">
    <div class="left">
      <icon v-if="!isSideBarVisible" @click="toggleSidebar" name="menu" />
    </div>
    <div class="right">
      <profile-preview v-if="isWideScreen" :horizontal="true" />
      <icon @click="logout" name="logout" />
    </div>
  </div>
</template>

<script>
import * as actionTypes from '@/store/actionTypes'

import ProfilePreview from './ProfilePreview'
import Icon from '@/components/UI/Icon'

export default {
  name: 'header-bar',
  components: {
    'profile-preview': ProfilePreview,
    'icon': Icon
  },
  computed: {
    isWideScreen () {
      return this.$store.getters.platform !== 'mobile'
    },
    isSideBarVisible () {
      return this.$store.getters.isSideBarVisible
    }
  },
  methods: {
    logout () {
      const { localStorage, sessionStorage } = window
      localStorage.clear()
      sessionStorage.clear()

      this.$router.push({ path: '/auth' })
    },
    toggleSidebar () {
      this.$store.dispatch(actionTypes.TOGGLE_SIDEBAR)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../styles/config.styl"

  .header-bar {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    min-height: 60px;

    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .left {
    margin-left: 20px;
  }

  .right {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .right > div {
    margin: 0 10px;
  }
</style>
