
<template lang="pug">
  div#app
    router-view

</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,500')
  @import url('https://fonts.googleapis.com/css?family=Roboto:400');
  @import url('https://fonts.googleapis.com/css?family=Exo+2:600|Source+Sans+Pro:400')
  @import "./components/styles/default.styl"

  @import "./components/styles/config.styl"

  html,body
    margin 0
    padding 0
    width 100%
    height 100%

  body
    font-family "Ubuntu"
    background-color backgroundColor
    color: #5e616b
</style>

<style lang="stylus">
  #app
    width 100%
    height 100%
</style>
