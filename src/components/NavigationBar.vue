<template lang="pug">
  nav
    .top-wrapper
      .most-used
        router-link(to="/timetable") Рассписание
        router-link(to="/record-book") Зачетка
        router-link(to="/electives") Факультативы
        router-link(to="/group-files") Файлы группы
    .menu(v-if="menuOpened")
      .menu-list
        router-link(to="/debt") Задолжность
        router-link(to="/academic-plan") Учебный план
        router-link(to="/portfolio") Портфолио
        router-link(to="/news") Новости
    button.open-menu(v-on:click="menuOpened= !menuOpened") =
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: 'navigation-bar',
    data () {
      return {
        menuOpened: false
      }
    },
    computed: {
      ...mapState('home/navigation', [
        'links',
        'mostUsedCount'
      ]),
      ...mapGetters('home/navigation', [
        'mostUsed',
        'others'
      ])
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'
  buttonSize = headerHigh / 2
  nav
    width 100%
    .top-wrapper
      width 100%
      display flex
      position fixed
      top 0
      z-index 2
      .most-used
        width "calc(100% - %s)" % buttonSize
        flex 4
        display flex
        justify-content space-around
        height headerHigh
        background-color white
        a
          display flex
          justify-content center
          align-items  center
    button
      position fixed
      top 0
      right 0
      width buttonSize
      height buttonSize
      margin ((headerHigh - buttonSize) / 2)
      z-index 3
    .menu
      z-index 2
      top 0
      bottom 0
      left 0
      right 0
      position absolute
      width 100%
      height 100%
      background white
      display flex
      .menu-list
        margin auto
        display flex
        flex-direction column
</style>
