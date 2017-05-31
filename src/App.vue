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
  html,body
    margin 0
    padding 0
    width 100%
    height 100%

  body
    font-family "Roboto"
</style>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    display flex
    flex-direction column

</style>
