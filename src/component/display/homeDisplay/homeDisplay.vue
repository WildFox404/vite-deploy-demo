<template>
  <div class="home-display" ref="wrapper">
    <div class="home-column">
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="movieHeight" :originalWidth="600" :originalHeight="450">
            <movie />
          </resizable-container>
        </div>
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="musicHeight" :originalWidth="800" :originalHeight="600">
            <music />
          </resizable-container>
        </div>
    </div>
    <div class="home-column">
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="gameHeight" :originalWidth="800" :originalHeight="400">
            <game />
          </resizable-container>
        </div>
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="videoHeight" :originalWidth="770" :originalHeight="370">
            <video-component />
          </resizable-container>
        </div>
    </div>
    <div class="home-column">
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="codeHeight" :originalWidth="380" :originalHeight="380">
            <code-component />
          </resizable-container>
        </div>
        <div class="home-itme">
          <resizable-container :width="itemWidth" :height="photoHeight" :originalWidth="810" :originalHeight="300">
            <photo />
          </resizable-container>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import glassCard from '@mycomponent/common/glassCard/glassCard.vue';
import photo from '@mycomponent/display/homeDisplay/photo/photo.vue';
import codeComponent from '@mycomponent/display/homeDisplay/code/code.vue';
import videoComponent from '@mycomponent/display/homeDisplay/video/video.vue';
import game from '@mycomponent/display/homeDisplay/game/game.vue';
import resizableContainer from '@mycomponent/common/resizableContainer/resizableContainer.vue';
import movie from '@mycomponent/display/homeDisplay/movie/movie.vue';
import music from '@mycomponent/display/homeDisplay/music/music.vue';
import { onMounted,onBeforeUnmount,ref } from 'vue';

const wrapper = ref<HTMLElement | null>(null);
let itemWidth = ref(0);
let codeHeight = ref(0);
let videoHeight = ref(0);
let movieHeight = ref(0);
let musicHeight = ref(0);
let gameHeight = ref(0);
let photoHeight = ref(0);

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


function handleResize() {
  if (wrapper.value) {
    const width = wrapper.value.offsetWidth;
    itemWidth.value = width / 3 - 20;
    console.log(itemWidth);
    videoHeight.value = itemWidth.value * 0.8;
    movieHeight.value = itemWidth.value * 0.75;
    musicHeight.value = itemWidth.value * 0.75;
    gameHeight.value = itemWidth.value * 0.5;
    codeHeight.value = itemWidth.value * 1;
    photoHeight.value = itemWidth.value * 0.7;
  }
}
</script>

<style scoped lang="scss">
.home-display {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 2rem;
  .home-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
    .home-itme {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 10px;
      position: relative;
      transform-origin: center center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      transition: transform 0.3s ease;
      
      // Double white border effect
      &::before,
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      
      &::after {
        inset: -3px;
        border: 1px solid rgba(255, 255, 255, 0.15);
      }

      // 3D hover effect
      &:hover {
        transform: translateY(-5px) rotate3d(1, 1, 0, 2deg);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>