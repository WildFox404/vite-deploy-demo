<template>
    <div class="card">
        <canvas class="liveCanvas"></canvas>
        <div class="control">
            <button></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted,onBeforeUnmount } from 'vue'
import * as PIXI from 'pixi.js'
import { Live2DModel } from 'pixi-live2d-display/cubism4';

(window as any).PIXI = PIXI;

let app: PIXI.Application;
let model: Live2DModel;
const liveCanvas = ref(null);

onMounted(
    async()=>{
        app = new PIXI.Application({
            view:liveCanvas.value || undefined,
            autoStart:true,
            resizeTo:window,
            backgroundAlpha:0,
        })
        model = await Live2DModel.from("http://localhost:5173/public/tororo.model3.json");

        app.stage.addChild(model);
        model.scale.set(0.5);
    }
);

onBeforeUnmount(()=>{
    model?.destroy();
    app?.destroy();
})

function expression(type: string){
    model.expression(type);
}

</script>
<style scoped lang="scss">
/* From Uiverse.io by bhaveshxrawat */ 
.card {
  width: 190px;
  height: 254px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.card h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.card::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
}  
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */


</style>