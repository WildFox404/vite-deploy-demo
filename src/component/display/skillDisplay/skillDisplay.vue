<template>
    <div class="container">
        <div class="skill-box">
            <span class="title">HTML</span>

            <div class="skill-bar">
            <span class="skill-per html">
                <span class="tooltip">70%</span>
            </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">SCSS</span>

            <div class="skill-bar">
            <span class="skill-per scss">
                <span class="tooltip">80%</span>
            </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Boostrap</span>

            <div class="skill-bar">
            <span class="skill-per Boostrap">
                <span class="tooltip">50%</span>
            </span>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  
}>()
</script>

<style scoped >
/* From Uiverse.io by Juanes200122 */ 
.container {
  position: relative;
  max-width: 500px;
  width: 100%;
  background: #282828;
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 7px;
}

.container .skill-box {
  width: 100%;
  margin: 25px 0;
}

.skill-box .title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: rgb(226, 226, 226);
}

.skill-box .skill-bar {
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-top: 6px;
  background: rgba(236, 236, 236, 0.1);
}

.skill-bar .skill-per {
  position: relative;
  display: block;
  height: 100%;
  width: 90%;
  border-radius: 6px;
  background: rgb(226, 226, 226);
  animation: progress 0.4s ease-in-out forwards;
  opacity: 0;
}

.skill-per.html {
  /*progreso de las diferentes lenguajes*/
  width: 70%;
  animation-delay: 0.1s;
}

.skill-per.scss {
  /*progreso de las diferentes lenguajes*/
  width: 80%;
  animation-delay: 0.1s;
}

.skill-per.Boostrap {
  /*progreso de las diferentes lenguajes*/
  width: 50%;
  animation-delay: 0.2s;
}

@keyframes progress {
  0% {
    width: 0;
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.skill-per .tooltip {
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 3px;
  background: rgb(226, 226, 226);
  z-index: 1;
}

.tooltip::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  height: 10px;
  width: 10px;
  z-index: -1;
  background-color: rgb(226, 226, 226);
  transform: translateX(-50%) rotate(45deg);
}

</style>