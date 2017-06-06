<template lang="pug">
  div(v-on:click="change",:class="['container',{change: isOpen}]")
    .bar1
    .bar2
    .bar3
</template>

<script>

  export default {
    name: 'menu-button',
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      change () {
        this.isOpen = !this.isOpen
        this.$emit('pressed')
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .container
    display inline-block
    cursor pointer

  .bar1, .bar2, .bar3
    width 35px
    height 5px
    background-color #333
    margin 6px 0
    transition 0.4s

  /* Rotate first bar */
  .change .bar1
    transform rotate(-45deg) translate(-9px, 6px)

  /* Fade out the second bar */
  .change .bar2
    opacity: 0

  /* Rotate last bar */
  .change .bar3
    transform rotate(45deg) translate(-8px, -8px)

</style>
