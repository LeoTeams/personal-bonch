<template lang="pug">
  .day
    h2.title
      span.week {{dayOfTheWeek}}
      //span.month {{dayOfTheMonth}}
    lesson(v-for="(lesson,index) in lessons",:number="index",:lesson="lesson",:key="lesson.title + index")
</template>

<script>
  import lesson from './Lesson.vue'

  let dayWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'september',
    'sunday'
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
    }
  }

</script>

<style lang="stylus" scoped>

  .day
    .title
      width 100%
      display flex
      justify-content flex-start
      font-size 4em
      margin-bottom 0
      .week
        flex 1
      .month
        flex 3
        text-align left
</style>
