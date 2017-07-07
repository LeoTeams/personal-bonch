<template>
  <img
    :src="url"
    @load="onLoad"
    :class="[isLoaded ? (isWide ? 'horizontal' : 'vertical') : 'loading']"></img>
</template>

<script>
export default {
  name: 'image-aspect-ratio',
  props: ['url'],
  data () {
    return {
      isLoaded: false,
      isWide: false
    }
  },
  methods: {
    onLoad (e) {
      if (!e.target) return

      this.isLoaded = true

      const { naturalWidth, naturalHeight } = e.target
      this.isWide = naturalWidth > naturalHeight
    }
  }
}
</script>

<style scoped>
  .loading {
    width: 100%;
    height: 100%;
  }

  .horizontal {
    max-height: 100%;
    width:auto !important;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .vertical {
    max-width: 100%;
    height:auto !important;
    margin-top: 50%;
    transform: translateY(-50%);
  }
</style>
