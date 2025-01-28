<template>
  <div class="cursor" ref="cursorEl">
    <img src="@assets/cursor.svg" alt="">
  </div>
  <!-- <div class="cat-display" v-show="appElShow">
    <cat-display></cat-display>
  </div> -->
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
    <!-- <div class="bg-container">
      <fade-up>
        <div class="bg-container-item"  >
          <div class="w-full h-60 flex-center">
            <ball-display></ball-display>
          </div>
        </div>
      </fade-up>
    </div> -->
    <div class="bg-container pt-20" v-if="appElShow">
      <fade-up>
        <div class="bg-container-item"  >
          <div class="w-full flex-center">
            <home-display></home-display>
          </div>
        </div>
      </fade-up>
    </div>
    <!-- 设计展示 -->
    <div class="w-full relative h-[1500px]" v-if="appElShow">
      <ParticleWhirlpoolBg
        :key="designKey"
        ref="designTopEl"
        class=" bg-[#1f1f1f] relative z-0 h-full"
        :particle-count="50"
      >
      </ParticleWhirlpoolBg>
      <div class="absolute mt-10 w-[80%] absolute-center transform -translate-x-1/2 -translate-y-1/2 z-10">
        <!-- <TextHoverEffect
          class=""
          text="DESIGN"
        >
        </TextHoverEffect> -->
        <div class="w-full flex-center flex mt-20">
          <h1 class="text-white text-balance text-8xl font-extrabold leading-none tracking-tighter">
            View
            <LineShadowText
              
              class="italic"
              :shadow-color="'#0092ff'"
            >
              Design
            </LineShadowText>
          </h1>
        </div>
        <ExpandableGallery
          :images="expandableGalleryImages"
          class=" mt-20"
        />
        <div class="mt-10 flex h-[500px] w-full gap-4 lg:h-[250px] lg:flex-row">
          <CardSpotlight
            class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
            :gradient-color="isDark ? '#363636' : '#C9C9C9'"
          >
            <video 
              src="/model/video/2.mp4" 
              class="w-full h-full cursor-pointer" 
              onclick="this.paused ? this.play() : this.pause()"
            ></video>
          </CardSpotlight>
          <CardSpotlight
            class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
            :gradient-color="isDark ? '#363636' : '#C9C9C9'"
          >
            <video 
              src="/model/video/3.mp4" 
              class="w-full h-full cursor-pointer" 
              onclick="this.paused ? this.play() : this.pause()"
            ></video>
          </CardSpotlight>
        </div>
        <div class="mt-4 flex h-[500px] w-full gap-4 lg:h-[250px] lg:flex-row">
          <CardSpotlight
            class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
            :gradient-color="isDark ? '#363636' : '#C9C9C9'"
          >
            <video 
              src="/model/video/5.mp4" 
              class="w-full h-full cursor-pointer" 
              onclick="this.paused ? this.play() : this.pause()"
            ></video>
          </CardSpotlight>
          <CardSpotlight
            class="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
            :gradient-color="isDark ? '#363636' : '#C9C9C9'"
          >
            <video 
              src="/model/video/6.mp4" 
              class="w-full h-full cursor-pointer" 
              onclick="this.paused ? this.play() : this.pause()"
            ></video>
          </CardSpotlight>
        </div>
      </div>
      <div class="absolute w-full bottom-0 z-10">
        <div class="gradient-opacity">
          <div class="h-60"></div>
        </div>
      </div>
      <div class="absolute w-full top-0 z-10">
        <div class="gradient-opacity-reverse">
          <div class="h-60"></div>
        </div>
      </div>
    </div>
    <!-- 游戏展示 -->
    <div
      v-if="appElShow"
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-[#1f1f1f] md:shadow-xl"
    >
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        My Like Game
      </span>

      <!-- Confetti component with ref -->
      <Confetti
        ref="confettiRef"
        class="absolute left-0 top-0 z-0 size-full"
        @mouseenter="fireConfetti"
      />
    </div>
    <div 
      v-if="appElShow"
      class="w-full bg-[#1f1f1f]"
    >
      <BentoGrid class="mx-auto px-20 bg-[#1f1f1f]">
        <BentoGridItem
          v-for="(item, index) in items"
          :key="index"
        >
          <template #header>
            <div class="flex size-full space-x-4 overflow-hidden">
              <div class="flex size-full flex-1 rounded-md bg-zinc-800">
                <img :src="item.src" class="w-full h-full object-cover rounded-md" />
              </div>
            </div>
          </template>

          <template #title>
            <strong>{{ item.title }}</strong>
          </template>

          <template #icon> </template>

          <template #description>
            <p>{{ item.description }}</p>
          </template>
        </BentoGridItem>
      </BentoGrid>
    </div>
    <!-- <div class="flex flex-col items-center justify-center bg-[#1f1f1f]">
      <ParticleImage
        class="w-full object-cover"
        image-src="https://picsum.photos/id/237/200/300"
        particleGap="5"
        :responsive-width="true"
      />
    </div> -->
    <!-- 电影展示 -->
    <div class="bg-gradient relative" v-if="appElShow">
      <div class="h-60"></div>
    </div>
    <div class="w-full relative" v-if="appElShow">
      <div class="w-full relative z-0" >
        <movie-top></movie-top>
      </div>
      <div class="w-full flex-center absolute top-0 z-10">
        <fade-up ref="movieTopEl">
          <VisibilityObserver>
            <HyperText 
              text="MY favorite  movies & video" 
              color="#fff" 
              duration="200" 
              class="text-8xl"
              fontSize="5rem"
            ></HyperText>
          </VisibilityObserver>
        </fade-up>
      </div>
    </div>
    <div class="bg-gradient-reverse" v-if="appElShow">
      <div class="h-60"></div>
    </div>
    <div
      v-if="appElShow"
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-[#1f1f1f] md:shadow-xl"
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


    </div>
    <!-- 阅读展示 -->
    <div
      v-if="appElShow"
      class="relative bg-[#1f1f1f] flex size-full flex-col items-center justify-center overflow-hidden px-40 pb-40 pt-8 md:pb-60 md:shadow-xl"
    >
      <span
        class="mt-40 z-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black bg-clip-text text-center text-8xl font-semibold leading-none text-transparent max-lg:-mt-12 dark:to-slate-900/10"
      >
        Read
      </span>
      <Globe class="" ref="readTopEl"/>
      <div
        class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
      ></div>
    </div>
    <div v-if="appElShow" class="bg-container">
      <div class="common-container">
        <bookDisplay>
        </bookDisplay>
      </div>
    </div>
    <div class="bg-[#1f1f1f]">
      <div class="h-20"></div>
    </div>
    <div class="bg-container">
      <div class="h-20"></div>
    </div>
  </div>
  
  <div class="nav-bar">
    <div class="nav-bar-content">
      <div class="nav-bar-content-main">
        <div class="logo-container">
          <img class="logo" src="/logo.png" alt="">
          <div class="text">LazyDog</div>
        </div>
        <div class="nav-bar-content-links">
          <div @click="goToHome" class="nav-bar-content-link">Home</div>
          <div @click="goToDesign" class="nav-bar-content-link">Design</div>
          <!-- <div @click="goToCode" class="nav-bar-content-link">Code</div> -->
          <div @click="goToGame" class="nav-bar-content-link">Game</div>
          <div @click="goToMovie" class="nav-bar-content-link">Movie</div>
          <div @click="goToRead" class="nav-bar-content-link">Read</div>
        </div>
        <div class="nav-bar-content-links">
          <contact-me></contact-me>
          <!-- <toggle-button></toggle-button> -->
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Confetti from "@mycomponent/ui/confetti/Confetti.vue";
import Vortex from "@mycomponent/ui/vortex-background/Vortex.vue";
import ParticleImage from "@mycomponent/ui/particle-image/ParticleImage.vue";
import LineShadowText from "@mycomponent/ui/line-shadow-text/LineShadowText.vue";
import ExpandableGallery from "@mycomponent/ui/expandable-gallery/ExpandableGallery.vue";
import TextHoverEffect from "@mycomponent/ui/text-hover-effect/TextHoverEffect.vue";
import ParticleWhirlpoolBg from "@mycomponent/ui/particle-whirlpool/ParticleWhirlpoolBg.vue";
import bookDisplay from "@mycomponent/display/bookDisplay/bookDisplay.vue";
import BentoGrid from "@mycomponent/ui/bento-grid/BentoGrid.vue";
import BentoGridItem from "@mycomponent/ui/bento-grid/BentoGridItem.vue";
import Book from "@mycomponent/ui/book/Book.vue";
import Globe from "@mycomponent/ui/globe/Globe.vue";
import ContainerScroll from "@mycomponent/ui/container-scroll/ContainerScroll.vue";
import Marquee from "@mycomponent/ui/marquee/Marquee.vue";
import ReviewCard from "@mycomponent/ui/marquee/ReviewCard.vue";
import VisibilityObserver from "@mycomponent/animate/visibilityObserver/visibilityObserver.vue";
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
const designTopEl = ref(null)
const readTopEl = ref(null)
const gameTopEl = ref(null)
const movieTopEl = ref(null)

const confettiRef = ref(null);

// Function to trigger confetti
function fireConfetti() {
  confettiRef.value?.fire({});
}

const expandableGalleryImages = [
  "/vite-deploy-demo/model/1.webp",
  "/vite-deploy-demo/model/7.jpg",
  "/vite-deploy-demo/model/4.webp",
  "/vite-deploy-demo/model/5.webp",
  "/vite-deploy-demo/model/3.webp",
  "/vite-deploy-demo/model/6.webp",
  "/vite-deploy-demo/model/9.jpg",
  "/vite-deploy-demo/model/2.webp",
];

// const expandableGalleryImages = [
//   "/model/1.webp",
//   "/model/7.jpg",
//   "/model/4.webp",
//   "/model/5.webp",
//   "/model/3.webp",
//   "/model/6.webp",
//   "/model/9.jpg",
//   "/model/2.webp",
// ];

const items = [
  {
    src: "https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/548430/header_alt_assets_25_schinese.jpg?t=1737629460",
    title: "Deep Rock Galactic",
    description: "100% 可破坏的地形、以及可爱的虫子 & 多矮人impact",
  },
  {
    src:"https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/1515210/header.jpg?t=1698932510",
    title: "Rusty Lake",
    description: "锈湖出品, 必属精品, 谜语人独立解谜游戏",
  },
  {
    src: "https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/105600/header.jpg?t=1731252354",
    title: "Terraria",
    description: "300颗够吗?哎呀,我没有史莱姆昂啊",
  },
  {
    src: "https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/1127400/header.jpg?t=1707161363",
    title: "Mindustry",
    description: "工业+塔防, 你能守住你的基地吗?物流管理+联机+编程",
  },
  {
    src: "https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/221260/header.jpg?t=1668741117",
    title: "little inferno",
    description: "烧,都可以🔥烧🔥",
  },
  {
    src:"https://shared.cdn.queniuqe.com/store_item_assets/steam/apps/1948280/header.jpg?t=1729241259",
    title: "Sokpop Collective",
    description: "袜子组合, 一群荷兰人的独立游戏工作室",
  },
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/c2seabnsfozypl81523522065/260?imageView2/2/w/328/h/456",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/hi1gl5jmmsxbotc1568114131/260?imageView2/2/w/328/h/456",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/whbvvx89kisclc1t1444923992.jpg/260?imageView2/2/w/328/h/456",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/rzunc9o5l5h1kzj1567587284/260?imageView2/2/w/328/h/456",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/tlvwiitova3d9m11524562617/260?imageView2/2/w/328/h/456",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://puui.qpic.cn/vcover_vt_pic/0/mzc00200hi47zu41689316787901/260?imageView2/2/w/328",
  },
  {
    img: "https://puui.qpic.cn/vcover_vt_pic/0/sdp00162wrymy4x1652239918/260?imageView2/2/w/328/h/456"
  },
  {
    img: "https://cdn.04pic.com/image/65aa85818f6cf.jpg"
  },
  {
    img: "https://cdn.04pic.com/image/6326f3ac9847b.jpg"
  },
  {
    img: "/vite-deploy-demo/movie/jojo.png"
  },
  // {
  //   img: "/movie/jojo.png"
  // }
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));

function handleMouseMove(e) {
  requestAnimationFrame(() => {
    if (cursorEl.value) {
      if(Math.abs(e.movementX) + Math.abs(e.movementY) > 3){
        rad = Math.atan2(e.movementX, -e.movementY);
      }
      
      cursorEl.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${rad}rad)`
    }
  })
}

function handleMouseOver(e) {
  const cursorStyle = window.getComputedStyle(e.target).cursor
  if (cursorStyle === 'pointer') {
    cursorEl.value.style.display = 'none'
  } else {
    cursorEl.value.style.display = 'block'
  }
}

const designKey = ref(0)
let designTimer = null
const visibilityDuration = 30000 // 30s

function refreshDesign() {
  designKey.value++
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        designTimer = setTimeout(() => {
          refreshDesign()
        }, visibilityDuration)
      } else {
        clearTimeout(designTimer)
      }
    })
  }, { threshold: 0.1 })

  if (designTopEl.value) {
    observer.observe(designTopEl.value.$el)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseover', handleMouseOver)
  clearTimeout(designTimer)
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

function goToDesign() {
  if (designTopEl.value) {
    // 访问组件的 DOM 元素
    designTopEl.value.$el.scrollIntoView({
      behavior: 'smooth',  // 平滑滚动
      block: 'start'      // 滚动到顶部对齐
    })
  }
}

function goToRead() {
  if (readTopEl.value) {
    // 访问组件的 DOM 元素
    readTopEl.value.$el.scrollIntoView({
      behavior: 'smooth',  // 平滑滚动
      block: 'start'      // 滚动到顶部对齐
    })
  }
}

function goToGame() {
  if (confettiRef.value) {
    // 访问组件的 DOM 元素
    confettiRef.value.$el.scrollIntoView({
      behavior: 'smooth',  // 平滑滚动
      block: 'start'      // 滚动到顶部对齐
    })
  }
}

function goToMovie() {
  if (movieTopEl.value) {
    // 访问组件的 DOM 元素
    movieTopEl.value.$el.scrollIntoView({
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
  .bg-gradient-reverse{
    background: linear-gradient(to bottom, #104166, #1f1f1f),
              linear-gradient(to bottom right, transparent 50%, #1f1f1f 50%),
              linear-gradient(to bottom left, transparent 50%, #1f1f1f 50%);
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

    .common-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 1304px;
      padding: 0 16px;
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
          color: #fff;
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

.absolute-center{
  position: absolute;
  top: 40%;
  left: 50%;
}
.gradient-opacity {
  background: linear-gradient(to bottom, rgba(31, 31, 31, 0), rgba(31, 31, 31, 1));
}

.gradient-opacity-reverse {
  background: linear-gradient(to top, rgba(31, 31, 31, 0), rgba(31, 31, 31, 1));
}
</style>
