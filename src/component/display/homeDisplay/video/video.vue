<template>
  <div class="camera" aria-label="Photorealistic illustration of a Polaroid camera">
    <div class="top">
      <div class="flash"></div>
      <div class="timer"></div>
      <div class="sensor"></div>
      <div class="lens"><div class="glass"></div></div>
      <div class="shutter"></div>
      <div class="viewfinder"><div class="glass"><div class="back"></div></div></div>
      <div class="toggle-container"><div class="toggle"></div></div>
      <div class="power"></div>
      <div class="title"></div>
    </div>
    <div class="bottom">
      <div class="toggle-container"><div class="toggle"><div class="handle"></div></div></div>
      <div class="printer"></div>
      <div class="labels">
        <div class="rainbow"></div>
        <div class="logo">Polaroid</div>
        <div class="type"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/* fossheim.io */
/* Tutorial: https://fossheim.io/writing/posts/css-polaroid-camera/ */

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: lightblue;
  background-image: radial-gradient(#9CDCE0, #9CD4E0);
}

.camera {
  display: flex;
  width: 570px;
  height: 470px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  position: relative;
}

.camera .bottom {
  display: block;
  width: 100%;
  height: 165px;
  position: absolute;
  bottom: 0;
  border-radius: 11px 11px 30px 30px;
  background-image: radial-gradient(#E1DFE2 60%, transparent 60%),
    radial-gradient(#E1DFE2 60%, transparent 60%),
    linear-gradient(90deg, #E1DFE2, #EAE8EB),
    linear-gradient(90deg, #EAE8EB, #E1DFE2),
    linear-gradient(90deg, #85817E, rgba(47,43,43,0) 5% 95%,  #696461), 
    linear-gradient(#4E4A49, #100C0D),
    linear-gradient(#312F32, #2A2A27, #363233);
  background-size: 50px 60px,
    50px 60px,
    185px 30px,
    185px 30px,
    100% 100%,
    100% 20px,
    100% 100%;
  background-repeat: no-repeat;
  background-position: 160px -26px,
    360px -26px,
    top right,
    top left,
    top left,
    bottom left, 
    bottom left;
  box-shadow: -1px 3px 2px 0px rgba(249,247,248, 0.65) inset;

}

.camera .bottom .printer {
  display: block;
  width: 470px;
  height: 40px;
  background-color: red;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  border-radius: 3px;
  
  background-image: linear-gradient(90deg, #474548 90%, #343233 90%),
    linear-gradient(90deg, #0E090D 10%, #4A4849 10%),
    linear-gradient(#4C4A4D 4%, #161214 9% 20%, #484445 30% 55%, #1A1617 80% 93%, #B0AFAD 99%);
  background-size: 8px 100%, 8px 100%, 100% 100%;
  background-repeat: no-repeat;
  background-position: top left, top right;
}

.camera .bottom .labels .rainbow {
  display: block;
  width: 40px;
  height: 46px;
  position: absolute;
  top: 100px;
  left: 80px;
  background-image: linear-gradient(
    #1D160F 5%, /* Black*/
    #0E9EE0 5% 14%, /* Blue */
    #1F211A 14% 19%, /* Black */
    #0EAE4F 19% 32%, /* Green */
    #2B2106 32% 37%, /* Black */
    #FFB404 37% 50%, /* Yellow */
    #2A1303 50% 55%, /* Black */
    #FE8204 55% 68%, /* Orange */
    #292313 68% 80%, /* Black */
    #E02D28 80% /* Red */
  );
}

.camera .bottom .labels .logo {
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #CDCCC8;
  text-align: center;
  margin-top: 8px;
}

.camera .bottom .toggle-container {
  display: block;
  width: 135px;
  height: 35px;
  background-color: red;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  border-radius: 0 0 10px 10px;
  background-image: radial-gradient(#353334, #4C4849 40%, transparent 70%),
    radial-gradient(#29272A, #464445 40%, transparent 70%),
    linear-gradient(#8B8786 10%, #5E5A5B 20% 65%, #969291);
  background-size: 70px 70px, 70px 70px, 100% 100%;
  background-repeat: no-repeat;
  background-position: top -25px left -40px, top -15px right -35px, top right;
}

.camera .bottom .toggle-container .toggle {
  position: absolute;
  display: block;
  width: 100px;
  height: 20px;
  top: 6px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-image: linear-gradient(
    #747371 2%,
    #525055 2%,
    #565152,
    #535250
  );
  border: 0.5px solid #141011;
}

.camera .bottom .toggle-container .toggle .handle {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  top: -2px;
  background-color: red;
  background-image: radial-gradient(#525051, #4B4746);
  border-radius: 10px;
  border: 0.5px solid rgba(133, 129, 128, 0.15);
  box-shadow: -1px 5px 5px #181619;
}

.camera .top {
  display: block;
  position: relative;
  width: 540px;
  height: 320px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 35px 35px 0 0;
  background-image: linear-gradient(
    90deg,
    rgba(243,243,243,0.75),
    rgba(243,243,243,0) 15% 85%,
    rgba(243,243,243,0.75)
  ), 
  linear-gradient(#FEFEFE, #F9F7F8),
  linear-gradient(#DDD9DA, #E2DEDF, #EAE8EB, #F3F1F4);
  background-size: 100%, 100% 3px, 100%;
  background-repeat: no-repeat;
  box-shadow: -1px 1px 2px 3px rgba(249,247,248, 0.85) inset;
}

.camera .top .lens {
  position: absolute;
  display: block;
  width: 210px;
  height: 210px;
  border-radius: 105px;
  background-color: black;
  top: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  
  background-image: radial-gradient(transparent, #000000),
    radial-gradient(rgba(51,53,54,0.4), transparent),
    radial-gradient(
      #2A282B 0% 27%, /* dark body 4 */
      #070508 27.5% 28%, /* dark shadow 4 */
      #4E4C4F 28.5% 28.6%, /* highlight 3 */
      #2A282B 28.7% 29.3%, /* dark body 3 */
      #070508 29.5% 29.8%, /* dark shadow 3 */
      #4E4C4F 30% 30.5%, /* highlight 2 */
      #2A282B 30.5% 32.5%, /* dark body 2 */
      #070508 33% 33.5%, /* dark shadow 2 */
      #4E4C4F 34% 34.5%, /* highlight 1 */
      #2A282B 34.5% 36.5%, /* dark body 1 */
      #070508 37% 37.5%, /* dark shadow 1 */
      #3D3B40 38% 38.5%, /* shadow 8 */
      #908E91 39% 39.5%, /* highlight 8 */
      #3D3B40 40% 40.5%, /* shadow 7 */
      #908E91 41% 41.5%, /* highlight 7 */
      #3D3B40 42% 42.5%, /* shadow 6 */
      #908E91 43% 43.5%, /* highlight 6 */
      #3D3B40 44% 44.5%, /* shadow 5 */
      #908E91 45% 45.5%, /* highlight 5 */
      #3D3B40 46% 46.5%, /* shadow 4 */
      #908E91 47% 47.5%, /* highlight 4 */
      #3D3B40 48% 48.5%, /* shadow 3 */
      #908E91 49% 49.5%, /* highlight 3 */
      #3D3B40 50% 50.5%, /* shadow 2 */
      #908E91 51% 51.5%, /* highlight 2 */
      #3D3B40 52% 52.5%, /* shadow 1 */
      #908E91 53% 54%, /* highlight 1 */
      #241E1E 54.5% 57%, /* outer */
      #131114 57% 59%, /* shadow */
      #3C3A3D 59% 60%, /* highlight */
      #241E1E 60% /* outer */
    );
  
  background-size: 350px 350px, 350px 350px, 100%;
  background-position: bottom -100px left, top -120px right 10px,  center center;
  background-repeat: no-repeat;
  box-shadow: 15px 55px 60px 5px #767072;
}

.camera .top .lens .glass {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 70px;
  background-image: radial-gradient(
      rgba(119, 109, 80, 0.85),
      transparent 40%
    ),
    radial-gradient(
      rgba(51,180,105,0.25) 13%, 
      rgba(119,159,59,0.2) 53% 70%,
      rgba(119,159,59,0) 68%
    ),
    radial-gradient(
      rgba(51,180,105,0.25) 23%, 
      rgba(51,180,105,0.2) 53% 70%,
      rgba(51,180,105,0) 68%
    ),
    radial-gradient(
      #2C1F28,
      #241921 55%,
      #080609 70%
    );
  background-size: 100%, 190% 100%, 190% 100%, 100%;
  background-repeat: no-repeat;
  background-position: center -10px, -30px -48px, -30px 55px, center;
}

.camera .top .shutter {
  display: block;
  width: 57px;
  height: 57px;
  position: absolute;
  border-radius: 30px;
  bottom: 30px;
  left: 25px;
  background-image: radial-gradient(#DA1107 51%, #ED4B1D 53.5%);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  background-position: bottom -10px center;
  border: 1px solid #520000;
  box-shadow: 1px 1px 1px rgba(255,255,255,0.2) inset, 0 0 2px 6px #DFDAD7, 1px 6px 10px #66514D, -1px -7.5px 1px white;
}

.camera .top .flash {
  position: absolute;
  width: 90px;
  height: 160px;
  border-radius: 15px;
  left: 25px;
  top: 25px;
  box-shadow: -1px -1px 1px #BDB8B5,
    -1.5px -2.1px 0.5px #24201D,
    -4px 4px 3px 3px #F4F0EF,
    -5px 8px 8px #ABA6AA,
    0.25px 1px 1px 5px #3E3A38 inset,
    0 -6px 1px 1px #F6F6F8 inset;
  background-image: linear-gradient(#EDECEA,#F6F6F8),
    linear-gradient(
      90deg,
      rgba(247,246,244,0) 3% /*transparent*/,
      rgba(247,246,244,0.5) 3% 6% /*white*/,
      rgba(247,246,244,0) 6% 11% /*transparent*/,
      rgba(247,246,244,0.5) 12% 15% /*white*/,
      rgba(247,246,244,0) 15% 21% /*transparent*/,
      rgba(247,246,244,0.5) 21% 23% /*white*/,
      rgba(247,246,244,0) 23% 24% /*transparent*/,
      rgba(247,246,244,0.5) 24% 25% /*white*/,
      rgba(247,246,244,0) 25% 27% /*transparent*/,
      rgba(247,246,244,0.5) 27% 28% /*white*/,
      rgba(247,246,244,0) 28% 31% /*transparent*/,
      rgba(247,246,244,0.5) 31% 33% /*white*/,
      rgba(247,246,244,0) 33% 35% /*transparent*/,
      rgba(247,246,244,0.5) 35% 37% /*white*/,
      rgba(247,246,244,0) 37% 39% /*transparent*/,
      rgba(247,246,244,0.5) 39% 41% /*white*/,
      rgba(247,246,244,0) 41% 43% /*transparent*/,
      rgba(247,246,244,0.5) 43% 45% /*white*/,
      rgba(247,246,244,0) 45% 48% /*transparent*/,
      rgba(247,246,244,0.5) 48% 50% /*white*/,
      rgba(247,246,244,0) 50% 55% /*transparent*/,
      rgba(247,246,244,0.5) 55% 57% /*white*/,
      rgba(247,246,244,0) 57% 59% /*transparent*/,
      rgba(247,246,244,0.5) 59% 60% /*white*/,
      rgba(247,246,244,0) 60% 61% /*transparent*/,
      rgba(247,246,244,0.5) 61% 62% /*white*/,
      rgba(247,246,244,0) 62% 64% /*transparent*/,
      rgba(247,246,244,0.5) 64% 66% /*white*/,
      rgba(247,246,244,0) 66% 69% /*transparent*/,
      rgba(247,246,244,0.5) 69% 71% /*white*/,
      rgba(247,246,244,0) 71% 75% /*transparent*/,
      rgba(247,246,244,0.5) 75% 77% /*white*/,
      rgba(247,246,244,0) 77% 79% /*transparent*/,
      rgba(247,246,244,0.5) 79% 80% /*white*/,
      rgba(247,246,244,0) 80% 81% /*transparent*/,
      rgba(247,246,244,0.5) 81% 82% /*white*/,
      rgba(247,246,244,0) 82% 84% /*transparent*/,
      rgba(247,246,244,0.5) 84% 86% /*white*/,
      rgba(247,246,244,0) 86% 89% /*transparent*/,
      rgba(247,246,244,0.5) 89% 91% /*white*/,
      rgba(247,246,244,0) 81% 95% /*transparent*/
    ),
    linear-gradient(
      90deg,
      rgba(186,184,185,0.1),
      rgba(247,246,244,0.65),
      rgba(186,184,185,0.1)
    ),
    linear-gradient(
      90deg,
      rgba(186,184,185,0.1),
      rgba(247,246,244,0.65),
      rgba(186,184,185,0.1)
    ),
    linear-gradient(
      #E3DEDA 15%,
      #AFAAA6 25% 35%,
      transparent 45%
    ),
    linear-gradient(
      #F0EFED 10%,
      #B0ABA7 20%,
      #403C3B 40%,
      #2F2B2A 43%,
      #292524 45% 55%,
      #696562 65% 75%,
      #C2BFBA 82% 86%,
      #DEDAD7 90% 93%, 
      #C9C6C1 94% 96%,
      #FFFEFA 98%),
    linear-gradient(#34332F, #3E3A38);
  background-size: 42px 20px, 42px 100%, 3px 100%, 3px 100%, 100% 3px, 100%, 100%;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat, repeat, no-repeat;
  background-position: 24px top, 25px top, 22px top, 64px top, center, center, center;
}

.camera .top .viewfinder {
  position: absolute;
  background-color: #1B1A18;
  width: 110px;
  height: 110px;
  border-radius: 20px;
  right: 20px;
  top: 20px;
  box-shadow: 0.5px 0.5px 1px 1.5px #F1EDEE,
    1.5px 1px 1px 1px #3B3535 inset,
    2px 2px 1px 1px #9F9E9C inset,
    -0.5px -2px 1.5px #9B9A98 inset,
    1px 1.5px 0.5px 1px #FBF7F8;
}

.camera .top .viewfinder .glass {
  position: absolute;
  background-color: white;
  width: 75px;
  height: 75px;
  left: 18px;
  top: 18px;
  border-radius: 20px;
  background-image: radial-gradient(rgba(236, 234, 237, 0.3) 50%, transparent 60%),
    radial-gradient(rgba(193, 189, 186, 0.3) 50%, transparent 60%),
    radial-gradient(#5B5758 45%, #302C2D, #131112);
  background-size: 106% 32%, 106% 25%, 100%;
  background-repeat: no-repeat;
  background-position: -3px -7px, bottom -8px left -3px, center;
  box-shadow: 0px 0px 1px 0px #010000 inset,
    0 0 1px 1px #393836 inset,
    0 0 2px 2px #010000 inset,
    0 0 2px 4px #393836 inset,
    0 0 1.5px 4.5px #010000 inset,
    -0.5px -1px 1px #5F5E5C,
    0.25px 2px 2px #464543;
}


.camera .top .viewfinder .glass .back {
  position: absolute;
  background-image: linear-gradient(#ECEAED, #E2E0E1);
  width: 40px;
  height: 40px;
  left: 18px;
  top: 19px;
  border-radius: 10px;
  box-shadow: 0.5px 2px 2px 0 #5E5B56,
    0px 1px 3px 0px #CAC4C5,
    -4px 0px 5px 0px rgba(9,7,5,0.75),
    1px 1px 1px 1px #F1ECF0 inset,
    1.5px 1.5px 1px 1px #D1D0CE inset;
  border: 0.5px solid rgba(9,7,5,0.75);
}

.camera .top .timer {
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 20px;
  left: 135px;
  top: 35px;
  background-image: radial-gradient(#E8E4E5, #DEDAD9);
  box-shadow: 0px 0.5px 1px 0.5px #605C5B,
    1px 1px 1px #FFFBFC inset;
}

.camera .top .sensor {
  position: absolute;
  width: 23px;
  height: 23px;
  border-radius: 20px;
  left: 135px;
  top: 70px;
  background-image: radial-gradient(#080607, transparent 50%),
    radial-gradient(#0B090A, #211F20, #131112, #383637, #100E0F, #383637, #100E0F);
  backround-size: 60%, 100%;
  background-position: -6px -3px, center;
  background-repeat: no-repeat;
  box-shadow: 0px 0.5px 1px 0.75px #FFFBFC, 0 -1px 1px #635F5E;
}

.camera .top .power {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 20px;
  right: 150px;
  top: 195px;
  background-image: radial-gradient(
    #000000 30%,
    #252525,
    #171717,
    #020001,
    #242223,
    #383637
  );
  box-shadow: 0px 0.5px 1px 0.75px #C6C1C0,
    0px -0.5px 0.5px 0.25px #1A1819,
    -5px -8px 8px 1px rgba(86,82,82,0.4);
}

.camera .top .toggle-container {
  position: absolute;
  width: 50px;
  height: 22px;
  border-radius: 20px;
  right: 50px;
  top: 145px;
  background-image: linear-gradient(#CC7B00 10%, #B26701);
  box-shadow: 0.2px 0.2px 0.5px 0.5px #935723 inset, 0.5px 1px 0.75px 0.25px #FCE9D8;
}

.camera .top .toggle-container .toggle{
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  top: 1px;
  background-image: radial-gradient(#FBC00A, #FFDB09);
  box-shadow: 0.5px 1px 0.75px 0.25px #FFED71 inset, 0px -0.5px 0.5px 0.5px #E6A11F inset, -1px 0.5px 4px 1px #964900;
}
</style>
  