<template lang="pug" >
  .schedule
    loading-indicator(v-if="isLoading").loading
    template(v-else="")
      button(v-if="viewWeekNumber > 0", v-on:click="previousWeek").previous
        span Предыдушая неделя
      h3.weekNumber
        | {{viewWeekNumber}} неделя
        transition(name="current-link")
          span(v-if="viewWeekNumber != currentWeek").current вернуться
      .days
        day(v-for="(day, index) in viewWeek", :dayWeek="index", :dayMonth="day.dayOfMonth", :lessons="day.lessons", :key="index")
      button(v-if="viewWeekNumber < data.length", v-on:click="nextWeek").next
        span Следующая неделя
</template>

<script>
  import day from './Day.vue'
  import LoadingIndicator from '../../UI/LoadingIndicator'

  const timeCheckDelay = 1000 * 60

  export default {
    name: 'schedule',
    data () {
      return {
        interval: 0,
        lastTimeCheck: 0,
        viewWeekNumber: 0
      }
    },
    computed: {
      isLoading () {
        return this.$store.getters.isScheduleLoading
      },
      data () {
        return this.$store.getters.schedule
      },
      currentWeek () {
        return this.$store.getters.currentWeek
      },
      viewWeek () {
        return this.data[this.viewWeekNumber]
      }
    },
    watch: {
      isLoading (val) {
        if (!val) { this.viewWeekNumber = this.currentWeek }
      }
    },
    methods: {
      previousWeek () {
        this.viewWeekNumber -= 1
      },
      nextWeek () {
        this.viewWeekNumber += 1
      }
    },
    components: {
      day,
      'loading-indicator': LoadingIndicator
    },
    mounted () {
      this.interval = setInterval(function () {
        if (this.lastTimeCheck && new Date(new Date() - this.lastTimeCheck).getDay() > 0) {
          this.$forceUpdate()
        }
        this.lastTimeCheck = new Date()
      }.bind(this), timeCheckDelay)
    },
    beforeDestroy () {
      clearInterval(this.interval)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../styles/config.styl"
  buttonHoverColor = #e1e1e1
  buttonWidth = 5rem

  // TODO: do it use stylus functions
  @keyframes emergenceToLeft
    0%
      opacity 0
      transform translateX(-1rem)
    80%
      opacity 0.6
    90%
      opacity 0.8
    95%
      opacity 0.9
    100%
      opacity 1
      transform translateX(0rem)
  @keyframes emergenceToRight
    0%
      opacity 0
      transform translateX(1rem)
    80%
      opacity 0.6
    90%
      opacity 0.8
    95%
      opacity 0.9
    100%
      opacity 1
      transform translateX(0rem)
  @keyframes buttonToRightHoverEffect
    0%
      background transparent
    25%
      background linear-gradient(to right, rgba(buttonHoverColor,25%),dayBackgroundColor)
    50%
      background linear-gradient(to right, rgba(buttonHoverColor,50%),dayBackgroundColor)
    75%
      background linear-gradient(to right, rgba(buttonHoverColor,75%),dayBackgroundColor)
    100%
      background linear-gradient(to right, buttonHoverColor, dayBackgroundColor)
  @keyframes buttonToLeftHoverEffect
    0%
      background transparent
    25%
      background linear-gradient(to left, rgba(buttonHoverColor,25%),dayBackgroundColor)
    50%
      background linear-gradient(to left, rgba(buttonHoverColor,50%),dayBackgroundColor)
    75%
      background linear-gradient(to left, rgba(buttonHoverColor,75%),dayBackgroundColor)
    100%
      background linear-gradient(to left, buttonHoverColor, dayBackgroundColor)
  .schedule
    width 100%
    display flex
    flex-direction column
    align-items center
    min-height 100%
    position: relative
    .loading
      margin auto
    .weekNumber
      text-align right
      margin 2rem 0 0 0
      padding 0 buttonWidth 0 buttonWidth
      position relative
      width 100%
      min-height 3rem
      .current
        position absolute
        bottom 0
        right buttonWidth
        color highlightColor
        cursor pointer
        &:hover
          color lighten(highlightColor, 15%)
          text-decoration underline
    .days
      margin-top 0
      padding 1rem buttonWidth
      width 100%
      .day
        width 100%
        margin-bottom 5rem
    & > button
      position absolute
      width buttonWidth
      height 100%
      top 0
      border none
      background dayBackgroundColor
      transition-property background
      transition-duration 0.5s
      span
        // TODO: fix position left button
        position fixed
        top 50%
        opacity 0
        width buttonWidth
        // TODO: fix visual devinition
        color highlightColor
      &:active, &:focus
        border none
        outline 0
      &.previous
        left 0
        span
          left 2rem
        &:hover
          animation buttonToRightHoverEffect
          animation-duration 0.2s
          animation-fill-mode forwards
          span
            animation emergenceToLeft
            animation-duration 0.3s
            animation-fill-mode forwards
            animation-delay 0.2s
      &.next
        right 0
        span
          right 2rem
        &:hover
          animation buttonToLeftHoverEffect
          animation-duration 0.2s
          animation-fill-mode forwards
          span
            animation emergenceToRight
            animation-duration 0.3s
            animation-fill-mode forwards
            animation-delay 0.2s

  .current-link-enter, .current-link-leave-to
    opacity 0
    transform translateY(-1rem)
  .current-link-enter-to, .current-link-leave
    opacity 1
    transform translateY(0)
  .current-link-enter-active, .current-link-active
    transition-property opacity transform
    transition-duration 0.3s

  @media screen and (max-width: mobile-edge)
    .schedule
      padding-left 0
      padding-right 0



</style>
