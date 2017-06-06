<template lang="pug">
  .lesson
    p.time {{time.begin}}
    .description
      p.title {{title}}
      p.type {{type}}
    p.room {{room}}
    p.teacher {{teacher}}

</template>

<script>

  let times = {
    begin: [
      '9:00',
      '10:45',
      '13:00',
      '14:45',
      '16:35'
    ],
    end: [
      '10:35',
      '12:20',
      '14:35',
      '16:20',
      '18:05'
    ]
  }

  export default {
    name: 'lesson',
    props: [
      'number',
      'lesson'
    ],
    data: function () {
      return {
        ...this.lesson
      }
    },
    computed: {
      time () {
        return {
          begin: times.begin[this.number],
          end: times.end[this.number]
        }
      }
    }

  }

</script>

<style lang="stylus" scoped>
  @import "../styles/config.styl"

  .lesson
    display flex
    width 100%
    color textColor
    justify-content flex-start
    margin-bottom 2em
    .time
      text-align right
      margin-right 1em
      width 3em
      margin-top 0
    .description
      display flex
      flex-direction column
      align-items left
      flex 4
      p
        margin-top 0
        margin-bottom 0
      .type
        color lightness(textColor,60%)
    .room
      margin-top 0
      flex 1
    .teacher
      margin-top 0
      flex 2

</style>
