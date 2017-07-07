<template>
  <div class="profile-preview" :class="[horizontal ? 'horizontal' : 'vertical']">
    <div class="avatar-wrapper">
      <image-aspect-ratio :url="profile.photo" />
    </div>
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="caption"> {{ caption }}</div>
    </div>
  </div>
</template>

<script>
import ImageAspectRatio from '@/components/UI/ImageAspectRatio'

export default {
  name: 'profile-preview',
  components: {
    'image-aspect-ratio': ImageAspectRatio
  },
  props: {
    horizontal: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    profile () {
      return this.$store.getters.profile
    },
    name () {
      const { firstName, lastName } = this.profile
      return `${firstName} ${lastName}`
    },
    caption () {
      const { status, qual } = this.profile
      return `${status}, ${qual.toLowerCase()}`
    }
  }
}
</script>

<style>
  .profile-preview {
    display: flex;
    align-items: center;
  }

  .profile-preview.horizontal {
    flex-direction: row-reverse;
  }

  .profile-preview.vertical {
    flex-direction: column;
    text-align: center;
  }

  .profile-preview .avatar-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profile-preview.vertical .avatar-wrapper {
    width: 70px;
    height: 70px;
  }

  .profile-preview .info {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .profile-preview.vertical .info {
    margin-top: 10px;
  }

  .profile-preview .info .caption {
    color: #aeb0b5;
    font-size: 13px;
    font-weight: 400;
  }
</style>
