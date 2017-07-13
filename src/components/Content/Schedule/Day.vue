<template lang="pug">
  .day(:class="{ 'current': isCurrentDay }")
    h2.title
      span.week {{dayOfTheWeek}}
      span.month {{dayOfTheMonth}}
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
        dayOfTheMonth: this.dayMonth
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

  @keyframes emergenceToLeft
    from
      opacity 0
      transform translateX(5rem)
    to
      opacity 1
      transform translateX(3rem)

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
        opacity 0
    &:hover
      .title
        .month
          animation emergenceToLeft 0.5s forwards

  .day
    &.current
      .title
        background-color loadingIndicatorColor
        color: #fff

      .lesson
        &.current
          background-color: white
</style>
