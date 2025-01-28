<template>
  <div ref="observerElement">
    <slot v-if="isVisible"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'VisibilityObserver',
  props: {
    threshold: {
      type: Number,
      default: 1.0,
    },
    rootMargin: {
      type: String,
      default: '0px',
    },
    duration: {
      type: Number,
      default: 1500,
    },
  },
  setup(props, { slots }) {
    const observerElement = ref<HTMLElement | null>(null);
    const isVisible = ref(true);
    let observer: IntersectionObserver;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Component is in view
          isVisible.value = true;
        } else {
          // Component is out of view
            if (!entry.isIntersecting) {
              isVisible.value = false;
            }
        }
      });
    };

    onMounted(() => {
      observer = new IntersectionObserver(handleIntersect, {
        threshold: props.threshold,
        rootMargin: props.rootMargin,
      });
      if (observerElement.value) {
        observer.observe(observerElement.value);
      }
    });

    onUnmounted(() => {
      if (observer && observerElement.value) {
        observer.unobserve(observerElement.value);
      }
    });

    return {
      observerElement,
      isVisible,
    };
  },
});
</script>

<style scoped>
/* Add any custom styles here */
</style>