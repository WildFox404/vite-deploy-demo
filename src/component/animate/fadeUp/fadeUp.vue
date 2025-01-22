<template>
  <div 
    class="fade-up"
    data-aos="fade-up"
    :data-aos-delay="delay"
    :data-aos-duration="duration"
    :data-aos-offset="offset"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  delay: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 800
  },
  offset: {
    type: Number,
    default: 80
  }
})
</script>

<style scoped>
.fade-up {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
