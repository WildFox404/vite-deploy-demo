<template>
  <div class="home-top">
    <iframe 
      :src="'/homeTop/homeTop.html'" 
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
    <div class="title" :style="titleStyle">
        <div class="wrapper">
            <h1 class="text">
                <div class="line">
                    <p>WEBSITE</p>
                    <p>LAZY</p>
                    <p>DOG</p> 
                </div>
                <div class="line">
                    <p>LAZY</p>
                    <p>DOG</p>
                    <p>WEBSITE</p>
                </div>
                <div class="line">
                    <p>DOG</p>
                    <p>WEBSITE</p>
                    <p>LAZY</p>
                </div>
            </h1>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTop',
  data() {
    return {
      titleStyle: {
        transform: 'translate(-50%, -50%) scale(1)'
      }
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const baseWidth = 1220 // 基准宽度
      const scale = Math.min(window.innerWidth / baseWidth, 1)
      this.titleStyle.transform = `translate(-50%, -50%) scale(${scale})`
    }
  }
}
</script>

<style scoped>
.home-top {
  width: 100%;
  height: 100vh; /* 设置高度为视口高度 */
}

.title {
  position: absolute;
  top: 48%;
  left: 48%;
  transform-origin: center center;
  transition: transform 0.3s ease;
  z-index: 10;
  color: #fff;
  /* 可选样式 */
  font-size: 2em;
  text-align: center;
  p{
    margin: 0;
  }
  .wrapper {
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
  }
  .text {
	margin: 0;
	font-size: 86px;
	text-align: left;
	text-transform: uppercase;
    font-weight: bold;
	text-align: center;
	.line {
		overflow: hidden;
        white-space: nowrap;
        height: 70px;	
		line-height: .9;
		&:first-child {
			& + .line {
				margin-left: 75px;
				&+ .line {
					margin-left: 150px;
				}
			}
		}
		> p {
			margin: 0;
			height: 70px;	
			overflow: hidden;
			font-size: 1em;
			line-height: .9;
			white-space: nowrap;
			animation: moveWords 4s infinite ease;
		}
	}
	.line:nth-child(odd) {
		transform: skew(60deg,-30deg) scaleY(.66667);
	}
	.line:nth-child(even) {
		transform: skew(0deg,-30deg) scaleY(1.33333);
	}
  }
}

iframe {
  border: none;
  overflow: hidden;
}

@keyframes moveWords {
	0% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0%);
	}
}
</style>