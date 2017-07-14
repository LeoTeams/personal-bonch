<template lang="pug">
  .day(:class="{ 'current': isCurrentDay }", v-on:mouseover="hover = true", v-on:mouseleave="hover = false")
    h2.title
      span.week {{dayOfTheWeek}}
      transition(name="month-transition")
        span(v-if="hover").month {{dayOfTheMonth}}
    lesson(v-for="(lesson,index) in computedLessons", :number="index", :lesson="lesson", :key="lesson.title + index")
</template>

<script>
  import lesson from './Lesson.vue'

  const updateDelay = 1000 * 60

  let dayWeek = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
  ]
  let calcLessons = lessons => {
    const now = new Date()
    let start = new Date()
    let end = new Date()
    return lessons.map(el => {
      start.setHours(+el.time.begin.slice(0, -3), +el.time.begin.slice(3))
      end.setHours(+el.time.end.slice(0, -3), +el.time.end.slice(3))
      const current = now >= start && now <= end
      if (!current) { return {...el, current} }
      return {...el, current, passed: ((now - start) / (end - start)) * 100}
    })
  }
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
        hover: false,
        interval: 0
      }
    },
    computed: {
      computedLessons () {
        return calcLessons(this.lessons)
      }
    },
    methods: {
      updateTime () {
        this.computedLessons = calcLessons(this.lessons)
      }
    },
    created () {
      const currentDay = new Date().getDay() - 1
      this.isCurrentDay = currentDay === this.dayWeek
      if (this.isCurrentDay) {
        this.interval = setInterval(function () {
          this.updateTime()
        }.bind(this), updateDelay)
      }
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
    },
    beforeDestroy () {
      clearInterval(this.interval)
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
