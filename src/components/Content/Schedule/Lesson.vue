<template lang="pug">
  .lesson(:class="{ 'current': isNow }")
    .time
      span.begin {{time.begin}}
      span.end {{time.end}}
    .description
      p.title {{title}}
      p.type {{type}}
    p.room
      span.top-room
        span.class-description кабинет
        span.class {{room.class}}
        span.short-hull /{{room.hull}}
      span.full-hull корпус {{room.hull}}
    p.teacher {{teacher}}

</template>

<script>
  export default {
    name: 'lesson',
    props: [
      'lesson',
      'today'
    ],
    data: function () {
      return {
        ...this.lesson
      }
    },
    created () {
      console.log(this.today)
      if (!this.today) {
        this.isNow = false
        return
      }

      const currentDate = new Date()
      const currentHours = currentDate.getHours()
      const currentMinutes = currentDate.getMinutes()

      const parseTime = target => {
        const split = this.time[target].split(':')
        return { hours: +split[0], minutes: +split[1] }
      }

      const begin = parseTime('begin')
      const end = parseTime('end')

      this.isNow = currentHours >= begin.hours && currentHours < end.hours &&
                    currentMinutes >= begin.minutes && currentMinutes < end.minutes
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../styles/config.styl"

  // TODO: more beutiful hover effect for room (aka: https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions)
  transition-opacity()
    transition-property opacity
    transition-duration 0.5s
  .lesson
    display flex
    width 100%
    color primaryTextColor
    justify-content flex-start
    padding-top 1em
    padding-bottom 1em
    font-family "Roboto", sans-serif
    font-weight 400
    .time
      text-align right
      margin-right 2rem
      width 4em
      margin-top 0
      display flex
      flex-direction column
      .end
        opacity 0
        transition-opacity()

    .description
      display flex
      flex-direction column
      align-items left
      flex 4
      font-weight 500
      p
        margin-top 0
        margin-bottom 0
      .title
        font-family "Exo 2", Serif
        font-weight 600
        line-height 1em
      .type
        color secondaryTextColor
        font-weight 200
        font-family "Source Sans Pro", sans-serif
    .room
      margin-top 0
      flex 1
      display flex
      flex-direction column
      margin-left: 0.5rem
      .class-description
        opacity 0
        margin-right 0.2em
        transition-opacity()
      .full-hull
        opacity 0
        transition-opacity()
      .short-hull
        transition-opacity()
    .teacher
      margin-top 0
      margin 0 0.5rem
      flex 2
      text-align center
    &:hover
      .time
        .end
          opacity 1
      .room
        .class-description
          opacity 1
        .full-hull
          opacity 1
        .short-hull
          opacity 0
</style>
