<template>
  <div class="schedule">
    <span>{{ isLoading ? 'Типа загрузка' : 'Schedule' }}</span>
  </div>
</template>

<script>
export default {
  name: 'schedule',
  computed: {
    isLoading () {
      return this.$store.getters.isScheduleLoading
    }
  }
}
</script>

<style scoped>
  .schedule {
    width: 100%;
    height: 100%;

    text-align: center;
    padding-top: 200px;
  }

  .schedule span {
    font-size: 3rem;
    opacity: 0.3;
  }

</style>
