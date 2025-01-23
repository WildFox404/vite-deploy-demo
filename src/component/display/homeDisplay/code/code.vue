<template>
  <figure>
    <div class="face front"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    <div class="face top"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
    
    <div class="face right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    <div class="face left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    <div class="face bottom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>

    <div class="face back"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </figure>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

figure{width:210px;height:210px;animation:rotation 5s infinite;-webkit-animation:rotation 5s infinite;position:absolute;top:50%;left:50%;margin-top:-105px;margin-left:-105px;transform-style: preserve-3d;-webkit-transform-style: preserve-3d;}

.face{width:100%;height:100%;position:absolute;-webkit-transform-origin: center;transform-origin: center;}
.face div{border:2px solid #fd1763;width:70px;height:70px;display:inline-block;box-sizing:border-box;vertical-align:top;}

.front{-webkit-transform: translate3d(0, 0, 105px);transform: translate3d(0, 0, 105px);}
.back{-webkit-transform: rotateY(180deg) translate3d(0, 0, 105px);transform: rotateY(180deg) translate3d(0, 0, 105px);}
.left{-webkit-transform: rotateY(-90deg) translate3d(0, 0, 105px);transform: rotateY(-90deg) translate3d(0, 0, 105px);}
.right{-webkit-transform: rotateY(90deg) translate3d(0, 0, 105px);transform: rotateY(90deg) translate3d(0, 0, 105px);}
.top{-webkit-transform: rotateX(90deg) translate3d(0, 0, 105px);transform: rotateX(90deg) translate3d(0, 0, 105px);}
.bottom{-webkit-transform: rotateX(-90deg) translate3d(0, 0, 105px);transform: rotateX(-90deg) translate3d(0, 0, 105px);}

@keyframes rotation{
  0%{transform: rotateX(0deg) rotateY(0deg)}
  50%{transform: rotateX(45deg) rotateY(45deg)}
  100%{transform: rotateX(90deg) rotateY(90deg)}
}
@-webkit-keyframes rotation{
  0%{-webkit-transform: rotateX(0deg) rotateY(0deg)}
  50%{-webkit-transform: rotateX(45deg) rotateY(45deg)}
  100%{-webkit-transform: rotateX(90deg) rotateY(90deg)}
}
</style>
  