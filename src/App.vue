<template>
  <div class="cursor" ref="cursorEl">
    <img src="@assets/cursor.svg" alt="">
  </div>
  <div class="cat-display" v-show="appElShow">
    <cat-display></cat-display>
  </div>
  <div class="main">
    <home-top ref="homeTopEl"></home-top>
    <div class="bg-container" v-show="appElShow">
      <fade-up>
        <div class="bg-container-item mt-10"  >
          <div class="flex-1">
            <bg-light-card class="p-4">
              <div class="w-full text-start pl-10 pb-4" style="color: #fff;">My Github Contribution Graph</div>
              <img src="https://ghchart.rshah.org/WildFox404" class="w-full" />
            </bg-light-card>
          </div>
          <weather-display></weather-display>
        </div>
      </fade-up>
    </div>
    <div class="bg-container">
      <fade-up>
        <div class="bg-container-item"  >
          <div class="w-full h-60 flex-center">
            <ball-display></ball-display>
          </div>
        </div>
      </fade-up>
    </div>
    <div class="bg-container">
      <fade-up>
        <div class="bg-container-item"  >
          <div class="w-full flex-center">
            <home-display></home-display>
          </div>
        </div>
      </fade-up>
    </div>
    <div class="bg-gradient">
      <div class="h-60"></div>
    </div>
    <div class="w-full relative">
      <div class="w-full relative z-0">
        <movie-top></movie-top>
      </div>
      <div class="w-full flex-center absolute top-0 z-10">
        <fade-up>
          <VisibilityObserver>
            <HyperText 
              text="MY favorite movies" 
              color="#fff" 
              duration="1500" 
              class="text-5xl"
              fontSize="3rem"
            ></HyperText>
          </VisibilityObserver>
        </fade-up>
      </div>
    </div>
    <div
    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
    >
      <!-- First Marquee -->
      <Marquee
        pause-on-hover
        class="[--duration:20s]"
      >
        <ReviewCard
          v-for="review in firstRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>

      <!-- Second Marquee (reverse) -->
      <Marquee
        reverse
        pause-on-hover
        class="[--duration:20s]"
      >
        <ReviewCard
          v-for="review in secondRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
    <div class="bg-[#104166]">
      <div class="h-20"></div>
    </div>
    <div class="bg-container">
      <div class="h-20"></div>
    </div>
  </div>
  
  <div class="container">
    <div class="nav-bar">
      <div class="nav-bar-content">
        <div class="nav-bar-content-main">
          <div class="logo-container">
            <img class="logo" src="@assets/vue.svg" alt="">
            <div class="text">LazyDog</div>
          </div>
          <div class="nav-bar-content-links">
            <div @click="goToHome" class="nav-bar-content-link">Home</div>
            <div class="nav-bar-content-link">Music</div>
            <div class="nav-bar-content-link">Photo</div>
            <div class="nav-bar-content-link">Code</div>
            <div class="nav-bar-content-link">Video</div>
            <div class="nav-bar-content-link">Game</div>
            <div class="nav-bar-content-link">Movie</div>
          </div>
          <div class="nav-bar-content-links">
            <contact-me></contact-me>
            <!-- <toggle-button></toggle-button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="empty-view"></div>
  </div>

</template>

<script setup>
import Marquee from "@mycomponent/ui/marquee/Marquee.vue";
import ReviewCard from "@mycomponent/ui/marquee/ReviewCard.vue";
import VisibilityObserver from "@mycomponent/animate/visibilityObserver/VisibilityObserver.vue";
import HyperText from "@mycomponent/ui/hyper-text/HyperText.vue";
import CardSpotlight from "@mycomponent/ui/card-spotlight/CardSpotlight.vue";
import { CardContainer, CardBody, CardItem } from "@mycomponent/ui/card-3d";
import movieTop from '@mycomponent/display/movieTop/movieTop.vue';
import homeDisplay from '@mycomponent/display/homeDisplay/homeDisplay.vue';
import movie from '@mycomponent/display/homeDisplay/movie/movie.vue';
import ballDisplay from '@mycomponent/display/ballDisplay/ballDisplay.vue';
import bgLightCard from '@mycomponent/common/bgLightCard/bgLightCard.vue';
import fadeUp from '@mycomponent/animate/fadeUp/fadeUp.vue';
import weatherDisplay from '@mycomponent/display/weatherDisplay/weatherDisplay.vue';
import homeTop from '@mycomponent/display/homeTop/homeTop.vue';
import catDisplay from '@mycomponent/display/catDisplay/catDisplay.vue';
import contactMe from '@mycomponent/common/contactMe/contactMe.vue';
import toggleButton from '@mycomponent/common/toggleButton/toggleButton.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

let rad = 0

const cursorEl = ref(null)
const appElShow = ref(true)

const homeTopEl = ref(null)

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));

function handleMouseMove(e) {
  if (cursorEl.value) {
    if(Math.abs(e.movementX) + Math.abs(e.movementY) > 3){
      rad = Math.atan2(e.movementX, -e.movementY);
    }
    
    cursorEl.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${rad}rad)`
  }
}

function handleMouseOver(e) {
  const cursorStyle = window.getComputedStyle(e.target).cursor
  if (cursorStyle === 'pointer') {
    cursorEl.value.style.display = 'none'
  } else {
    cursorEl.value.style.display = 'block'
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseover', handleMouseOver)
  window.addEventListener('resize', () => {
    let clientWidth = document.documentElement.clientWidth
    if(clientWidth < 970){
      cursorEl.value.style.display = 'none'
      appElShow.value = false
    }else{
      cursorEl.value.style.display = 'block'
      appElShow.value = true
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseover', handleMouseOver)
})

function goToHome() {
  if (homeTopEl.value) {
    // 访问组件的 DOM 元素
    homeTopEl.value.$el.scrollIntoView({
      behavior: 'smooth',  // 平滑滚动
      block: 'start'      // 滚动到顶部对齐
    })
  }
}
</script>

<style scoped lang="scss">
.container{
  z-index: 20;
  width: 100%;
  position: relative;
  align-items: center;
  position: fixed;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
}

.empty-view{
  height: 90px;
}

.cat-display{
  position: fixed;
  width: auto;
  height: auto;
  z-index: 10;
}
.main{
  width: 100%;
  height: 100%;
  background: #1f1f1f;
  z-index: 0;
  .bg-gradient{
    background: linear-gradient(to bottom, #1f1f1f, #0092ff);
  }
  .bg-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #1f1f1f;
    .bg-container-item{
      gap: 20px;
      display: flex;
      width: 100%;
      height: auto;
      max-width: 1204px;
      padding: 0 16px;
      transform-origin: top center;
      transition: transform 0.3s ease;
    }
  }
}
.nav-bar{
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-bar-content{
    tab-size: 4;
    color-scheme: dark;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    grid-template-rows: 24px auto;
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
    height: 76px;
    background: linear-gradient(137deg,rgba(17,18,20,.75) 4.87%,rgba(12,13,15,.9) 75.88%);
    backdrop-filter: blur(5px);
    border: 1px solid var(--Card-Border,hsla(0,0%,100%,.06));
    border-radius: 16px;
    box-shadow: inset 0 1px 1px 0 hsla(0,0%,100%,.15);

    overflow: visible;
    flex: 1;
    max-width: 1204px;

    .nav-bar-content-main{
      display: flex;
      justify-content: space-between;
      height: 100%;
      padding: 16px 32px;
      overflow: visible;
      align-items: center;

      .logo-container{
        display: flex;
        align-items: center;
        transition: transform .2s ease;
        .logo{
          width: 24px;
          height: 24px;
        }
        .text{
          font-size: 16px;
          font-weight: 700;
          margin-left: 8px;
        }
      }

      .logo-container:hover{
        transform: scale(1.05);
      }

      .nav-bar-content-links{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        padding: 0;

        .nav-bar-content-link{
          text-decoration: none;
          padding: 12px 8px;
          font-size: 14px;
          font-weight: 500;
          line-height: normal;
          color: #9c9c9d;
          letter-spacing: .2px;
          white-space: nowrap;
          transition: all .2s ease-in-out;
        }

        .nav-bar-content-link:hover{
          color: #fff;
        }
      }

      .nav-bar-content-links{
        display: flex;
        align-items: center;
      }
    }
  }
}

.light .text {
  color: black;
}

.dark .text {
  color: white;
}

.light button {
  background-color: white;
  color: black;
}

.dark button {
  background-color: #07090a;
  color: white;
}

.cursor{
  z-index: 99999;
  width: 18px;
  height: 18px;
  position: fixed;
  margin-left: -9px;
  pointer-events: none;
}

.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
