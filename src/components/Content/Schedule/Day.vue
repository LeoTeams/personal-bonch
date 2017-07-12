<template lang="pug">
  .day(:class="{ 'current': isCurrentDay }")
    h2.title
      span.week {{dayOfTheWeek}}
      //span.month {{dayOfTheMonth}}
    lesson(v-for="(lesson,index) in lessons", :today="isCurrentDay" :number="index",:lesson="lesson",:key="lesson.title + index")
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

  .day
    background-color #fff
    border-radius 10px
    .title
      transform translate(70px, -30px)
      width 100%
      display flex
      justify-content flex-start
      font-size 4em
      margin-bottom 1rem
      margin-top 0
      color headerColor
      .week
        padding 0 20px
        background-color: #fff
        border-radius 10px
      .month
        flex 3
        text-align left

  .day
    &.current
      box-shadow: 0 0px 3px rgba(0,0,0,0.12), 0 0px 2px rgba(0,0,0,0.24);
      .week
        background-color loadingIndicatorColor
        color: #fff
      .lesson
        &.current
          background-color: white
</style>
