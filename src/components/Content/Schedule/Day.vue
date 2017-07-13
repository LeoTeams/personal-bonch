<template lang="pug">
  .day(:class="{ 'current': isCurrentDay }", v-on:mouseover="hover = true", v-on:mouseleave="hover = false")
    h2.title
      span.week {{dayOfTheWeek}}
      transition(name="month-transition")
        span(v-if="hover").month {{dayOfTheMonth}}
    lesson(v-for="(lesson,index) in lessons", :today="isCurrentDay", :number="index",:lesson="lesson",:key="lesson.title + index")
</template>

<script>
  import lesson from './Lesson.vue'
  let dayWeek = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
  ]
  export default {
    name: 'day',
    components: {
      lesson
    },
    props: [
      'dayWeek',
      'dayMonth',
      'lessons'
    ],
    data () {
      return {
        dayOfTheWeek: dayWeek[this.dayWeek],
        dayOfTheMonth: this.dayMonth,
        hover: false
      }
    },
    created () {
      const currentDay = new Date().getDay() - 1
      this.isCurrentDay = currentDay === this.dayWeek
    },
    mounted () {
      if (this.isCurrentDay) {
        const { $el } = this

        if ($el.scrollIntoViewIfNeeded) {
          $el.scrollIntoViewIfNeeded(true)
          return
        }
        $el.scrollIntoView(true)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../styles/config.styl"

  .day
    background-color dayBackgroundColor
    border-radius 10px
    .title
      width 100%
      display flex
      justify-content flex-start
      font-size 4em
      margin-bottom 1rem
      margin-left 0
      margin-top 0
      color headerColor
      line-height 1em
      .week
        padding 0 1rem
        border-radius 10px
      .month
        flex 3
        text-align left
        margin-left 2rem
  .day
    &.current
      .title
        background-color loadingIndicatorColor
        color: #fff

      .lesson
        &.current
          background-color: white

  .month-transition-enter, .month-transition-leave-to
    opacity 0
    transform translateX(3rem)
  .month-transition-enter-to, .month-transition-leave
    opacity 1
    transform translateX(0)
  .month-transition-enter-active, .month-transition-leave-active
    transition-property opacity transform
    transition-duration 0.5s
</style>
