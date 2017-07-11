<template>
  <div class="v-spinner" v-show="loading">
    <div class="v-moon v-moon1" v-bind:style="spinnerStyle">
    <div class="v-moon v-moon2" v-bind:style="[spinnerMoonStyle,animationStyle2]">
    </div><div class="v-moon v-moon3" v-bind:style="[spinnerStyle,animationStyle3]">
    </div></div>
  </div>
</template>

<script>
// https://github.com/greyby/vue-spinner
export default {
  name: 'loading-indicator',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '30px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      spinnerStyle: {
        height: this.size,
        width: this.size,
        borderRadius: this.radius
      }
    }
  },
  computed: {
    moonSize () {
      return parseFloat(this.size) / 7
    },
    spinnerMoonStyle () {
      return {
        height: this.moonSize + 'px',
        width: this.moonSize + 'px',
        borderRadius: this.radius
      }
    },
    animationStyle2 () {
      return {
        top: parseFloat(this.size) / 2 - this.moonSize / 2 + 'px'
      }
    },
    animationStyle3 () {
      return {
        border: this.moonSize + 'px solid '
      }
    }
  }
}
</script>

<style lang="stylus">
  @import "../styles/config.styl"

  .v-spinner
    width 30px
    margin 15px auto 0

    .v-moon1
      animation: v-moonStretchDelay 0.6s 0s infinite linear
      animation-fill-mode forwards
      position relative

    .v-moon2
      animation v-moonStretchDelay 0.6s 0s infinite linear
      animation-fill-mode forwards
      opacity 0.8
      position absolute
      background-color loadingIndicatorColor

    .v-moon3
      opacity 0.3
      border-color loadingIndicatorColor

  @-webkit-keyframes v-moonStretchDelay
    100%
      transform rotate(360deg)

  @keyframes v-moonStretchDelay
    100%
      transform rotate(360deg)

</style>
