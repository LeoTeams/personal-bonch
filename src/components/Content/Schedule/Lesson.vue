<template lang="pug">
  .lesson
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
      'lesson'
    ],
    data: function () {
      return {
        ...this.lesson
      }
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
      width 3em
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
      flex 2
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
