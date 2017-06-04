<template lang="pug">
  -
    var arr = Array(10).fill('lesson')

  table
    each l in arr
      tr
        each val in arr
          td=val
</template>

<script>
  export default {
    name: 'timetable'
  }
</script>

<style lang="stylus" scoped>

</style>
