<template>
  <div class="checkbox" @click="click" :class="{ 'checked': value }">
    <div class="box">
      <svg class="check-mark" xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11">
        <path fill="#fff" d="M14.32 1.79L12.54.07 5.96 7.32 2.3 3.57.66 5.21l5.3 5.53z"/>
      </svg>
    </div>
    <div class="label">
      <slot name="label">{{ label }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style scoped>
  .checkbox {
    display: flex;
    align-items: center;
    height: 15px;
    cursor: pointer;
  }

  .checkbox:not(.checked) .label {
    color: #5e616b;
  }

  .checkbox .box {
    width: 15px;
    height: 15px;
    border: 1px solid #cfd2db;
    background-color: #ffffff;
    margin-right: 9px;
    box-sizing: border-box;
    border-radius: 2px;
  }

  .checkbox .box .check-mark {
    margin-top: 1px;
    margin-left: -1px;
    display: none;
  }

  .checkbox.checked .box {
    border-color: #FFCA4F;
    background-color: #FFCA4F;
  }

  .o-gray .checkbox.checked .box {
    border-color: #FFCA4F;
    background-color: #FFCA4F;
  }

  .checkbox.checked .box .check-mark {
    display: block;
  }
</style>
