<template>
  <div class="custom-input" :style="{ 'width': width, 'height': height }">
    <input @input="$emit('input', data = $event.target.value)" @focus="focused = true" :value="data" @blur="focused = false" :type="type" />
    <div v-if="placeholder" :class="{ 'active': focused || data.length > 0 }" class="placeholder message">{{ placeholder }}</div>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  data () {
    return {
      focused: false,
      data: this.value
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '40px'
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
  .custom-input {
    position: relative;
  }

  .custom-input input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .custom-input input:focus {
    border-color: #FFCA4F;
  }

  .custom-input .placeholder {
    position: absolute;
    top: 10px;
    left: 20px;
    transition: top 0.15s, left 0.15s;
    pointer-events: none;
  }

  .custom-input .placeholder.active {
    position: absolute;
    top: -20px;
    left: 0px;
  }
</style>
