<template>
  <div class="main">
    <side-bar />
    <div class="content">
      <header-bar />
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
  import Sidebar from './Sidebar'

  export default {
    name: 'home',
    components: {
      'header-bar': Header,
      'side-bar': Sidebar
    },
    computed: {
      isWideScreen () {
        return this.$store.getters.platform === 'desktop'
      }
    }
  }
</script>

<style lang="stylus">
  @import "./styles/config.styl"

  .main
    width 100%
    height 100%
    display flex
    .content
      height 100%
      flex 1
      display flex
      flex-direction column
      .content-wrapper
        flex 1
        background linear-gradient(135deg, gradientStart, gradientEnd)
        overflow auto

</style>
