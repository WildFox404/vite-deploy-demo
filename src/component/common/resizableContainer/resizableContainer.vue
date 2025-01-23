<template>
  <div :style="containerStyle">
    <div :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResizableContainer',
  props: {
    width: {
      type: Number,
      value: 0,
      required: true
    },
    height: {
      type: Number,
      value: 0,
      required: true
    },
    originalWidth: {
      type: Number,
      value: 0,
      required: true
    },
    originalHeight: {
      type: Number,
      value: 0,
      required: true
    }
  },
  computed: {
    containerStyle() {
      console.log(this.width, this.height);
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        overflow: 'hidden',
        position: 'relative'
      };
    },
    contentStyle() {
      console.log(this.originalWidth, this.originalHeight);
      return {
        width: `${this.originalWidth}px`,
        height: `${this.originalHeight}px`,
        transform: `scale(${this.scale})`,
        transformOrigin: 'top left'
      };
    },

    scale() {
      return Math.min(this.width / this.originalWidth, this.height / this.originalHeight);
    }
  }
};
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>