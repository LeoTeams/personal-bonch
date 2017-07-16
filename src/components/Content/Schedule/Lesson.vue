<template lang="pug">
  .lesson(:class="[{ current: isNow}, typeClass ]", v-on:mouseover="hover = true", v-on:mouseleave="hover = false")
    .time
      span.begin {{time.begin}}
      transition(name="time-end")
        span(v-if="hover").end {{time.end}}
    .description
      separator(v-if="current", :type="type.number", :style="{'top': passed + '%'}")
      p.title {{title}}
      p.type {{type.name}}
    p.room
      span.top-room
        span.class-description кабинет
        span.class {{room.class}}
        span.short-hull /{{room.hull}}
      span.full-hull корпус {{room.hull}}
    p.teacher {{teacher}}

</template>

<script>
  import separator from './Separator.vue'

  let typeClasses = ['first', 'second', 'third']

  export default {
    name: 'lesson',
    props: {
      lesson: {
        type: Object,
        required: true
      }
    },
    components: {
      separator
    },
    data: function () {
      return {
        ...this.lesson,
        typeClass: typeClasses[this.lesson.type.number],
        hover: false
      }
    },
    created () {
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

  @keyframes emergenceToBottom
    0%
      opacity 0
      transform translateY(-1rem)
    80%
      opacity 0.6
    90%
      opacity 0.8
    95%
      opacity 0.9
    100%
      opacity 1
      transform translateY(0rem)

  // TODO: more beutiful hover effect for room (aka: https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions)
  transition-opacity()
    transition-property opacity
    transition-duration 0.3s
  .lesson
    display flex
    width 100%
    color primaryTextColor
    justify-content flex-start
    padding-top 0
    padding-bottom 0
    font-family "Roboto", sans-serif
    font-weight 400

    .time
      text-align right
      margin-right 1rem
      width 4em
      margin-top 0
      display flex
      flex-direction column

    .description
      display flex
      flex-direction column
      align-items left
      flex 4
      font-weight 500
      margin-left 0
      padding-left 1rem
      position relative
      z-index 4
      p
        margin-top 0
        margin-bottom 0
      .title
        font-family "Exo 2", Serif
        font-weight 600
        line-height 1em
      .type
        color secondaryTextColor
        font-weight 400
        opacity 0.8
        transition-property opacity
        transition-duration 0.3s
        font-family "Source Sans Pro", sans-serif
      .separator
        position absolute
        // TODO: fix bug with border when separator on top of next lesson
        top 0
        left calc(-0.5rem - 1px)
        transition-property top
        transition-duration 0.1s

    colors = firstTypeLessonColor secondTypeLessonColor thirdTypeLessonColor
    for num, i in first second third
      &.{num}
        .description
          border-left 2px solid
          border-left-color colors[i]
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
      margin 0 0.5rem
      flex 2
      text-align center
    &:hover
      .description
        .type
          opacity 1
      .room
        .class-description
          opacity 1
        .full-hull
          opacity 1
        .short-hull
          opacity 0

  .time-end-enter, .time-end-leave-to
    opacity 0
    transform translateY(-0.5rem)
  .time-end-enter-to, .time-end-leave
    opacity 1
    transform translateY(0)
  .time-end-enter-active, .time-end-leave-active
    transition-property opacity transform
    transition-duration 0.3s

</style>
