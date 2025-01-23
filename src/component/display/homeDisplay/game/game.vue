<template>
  <div class="poison">
    <div class="poison__bottleContainer">
    <div class="poison__bottle">
        <div class="poison__bottleNeck">
        <span class="poison__bottleNeckShadow"></span>
        </div>
        <div class="poison__bottleShine"></div>
        <div class="poison__bottleContent">
        <span class="poison__bottleEyes"></span>
        </div>
    </div>
    </div>

    <div class="poison__flaskContainer">
    <div class="poison__flask">
        <div class="poison__flaskMouth"></div>
        <div class="poison__flaskNeck">
        <span class="poison__flaskNeckShadow"></span>
        </div>
        <div class="poison__flaskContent">
        <span class="poison__flaskEye"></span>
        </div>
    </div>
    </div>

    <div class="poison__mushroomContainer">
    <div class="poison__mushroom">
        <span class="poison__mushroomCaps"></span>
        <span class="poison__mushroomStem"></span>
    </div>
    </div>

    <div class="poison__skullContainer">
    <div class="poison__skull">
        <span class="poison__skullHorn"></span>
        <span class="poison__skullHorn poison__skullHorn--isSecond"></span>

        <div class="poison__skullShadow"></div>
        <div class="poison__skullEyes"></div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$amaranth: #e52d4f;
$athens-gray: #eae9ef;
$black: #000000;
$black-russian: #080017;
$bone: #e3d1bb;
$bright-sun: #ffd239;
$cactus: #507853;
$champagne: #fae6ce;
$cod-gray: #171717;
$just-right: #e9cbaf;
$mulberry-wood: #4e062c;
$olive-green: #a1b65b;
$olive-green-2: #a0b55a;
$pink-salmon: #fe91a4;
$pumice: #c8cac9;
$pumice-2: #b6b8b7;
$radical-red: #ff385f;
$texas-rose: #ffac50;
$white: #ffffff;
$yellow-orange: #fda644;

$font-size: 10px;

body {
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
  background-color: $mulberry-wood;
}

.poison {
  font-size: $font-size;
  margin: auto;
  position: relative;
  width: max-content;
  height: 33.125em;
  display: grid;
  grid-template-columns: 15.125em 18.9375em 1em auto;
  align-items: end;
  margin-top: 2%;

  // line
  &::after {
    content: "";
    position: absolute;
    left: -4.0625em;
    width: 120%;
    height: 0.5em;
    border-radius: 0.5em;
    background-color: $black;
    z-index: 5;
  }
}

.poison__bottleContainer {
  z-index: 4;
}

.poison__bottle {
  position: relative;
  width: 19.0625em;
  height: 16.25em;
  padding: 1.5em;
  box-sizing: border-box;
  border-radius: 5em 5em 1.875em 1.875em;
  background-color: $pumice;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  // mouth
  &::before {
    content: "";
    position: absolute;
    top: calc(-3em - 1.4375em);
    width: 14.875em;
    height: 3em;
    border-radius: 3em;
    background-color: inherit;
  }

  // squares
  &::after {
    content: "";
    position: absolute;
    top: -13.125em;
    left: 7.1875em;
    width: 3.75em;
    height: 3.75em;
    color: $olive-green;
    background-color: currentColor;
    transform: rotate(45deg);
    box-shadow: 4.5em 0 0 -0.9375em, -4.6875em -0.9375em 0 -0.9375em,
      1.25em -7.1875em 0 -0.9375em, 2.1875em -4.6875em 0 -1.25em,
      -2.1875em -4.0625em 0 -1.375em $white, -0.625em 4.375em 0 -1.375em $white;
  }
}

.poison__bottleNeckShadow,
.poison__bottleNeck {
  &::before,
  &::after {
    content: "";
    width: 1.5625em;
    height: 1.5625em;
    border-radius: 50%;
    position: absolute;
  }

  &::before {
    left: -0.78125em;
  }

  &::after {
    right: -0.78125em;
  }
}

.poison__bottleNeck {
  position: absolute;
  top: -1.5em;
  width: 8.5em;
  height: 1.5625em;
  overflow: hidden;
  z-index: -1;

  &::before,
  &::after {
    box-shadow: 0 0 0 6.25em $pumice;
  }
}

.poison__bottleNeckShadow {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 50%;
  z-index: 1;

  &::before,
  &::after {
    box-shadow: 0 0 0 6.25em $pumice-2;
  }
}

.poison__bottleShine {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 3.5625em;
    left: 0.6875em;
    width: 4.5625em;
    height: 4.5625em;
    border-radius: 50%;
    background-color: rgba($white, 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.625em;
    right: -0.5em;
    width: 5em;
    height: 12.5em;
    border-radius: 4.0625em 4.0625em 0 0;
    background-color: rgba($white, 0.3);
  }
}

.poison__bottleContent {
  position: relative;
  width: 100%;
  height: 8.75em;
  border-radius: 0 0 1.875em 1.875em;
  background-color: $cactus;
  z-index: 1;

  // filter
  &::before {
    content: "";
    position: relative;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: rgba($cactus, 0.3);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: -3.375em;
    left: 1.375em;
    width: 4.5625em;
    height: 9.9375em;
    border-radius: 4.5625em;
    background-color: rgba($white, 0.3);
    z-index: -2;
  }
}

.poison__bottleEyes {
  // big eye
  position: absolute;
  top: -1.03125em;
  right: 4.25em;
  width: 2.0625em;
  height: 2.0625em;
  border-radius: 50%;
  background-color: $black-russian;
  box-shadow: 0 0 0 0.9375em $bright-sun, 0.3125em 0 0 1.875em $white;

  // small eye
  &::before {
    content: "";
    position: absolute;
    bottom: -4.875em;
    left: -1.8125em;
    height: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    background-color: inherit;
    box-shadow: -0.1875em 0.1875em 0 0.625em $yellow-orange,
      -0.3125em 0.375em 0 1.25em $white;
  }

  // bubbles
  &::after {
    content: "";
    position: absolute;
    top: -2.5em;
    left: 0.25em;
    width: 1.9375em;
    height: 1.9375em;
    border-radius: 50%;
    color: $olive-green-2;
    background-color: currentColor;
    z-index: -1;
    box-shadow: -2.0625em -1.5em 0 -0.4375em,
      -3.6875em 2.6875em 0 0.3125em $cactus, -3.8125em 4.8125em 0 -0.1875em,
      -5em 7.8125em 0 0.3125em;
  }
}

.poison__flaskContainer {
  z-index: 3;
}

.poison__flask {
  position: relative;
  width: 23.375em;
  height: 23.375em;
  border-radius: 50%;
  padding: 2.0625em;
  box-sizing: border-box;
  background-color: $champagne;

  display: flex;
  align-items: center;
  justify-content: center;

  // bubbles
  &::before {
    content: "";
    position: absolute;
    top: 3.75em;
    left: 2.875em;
    width: 5.625em;
    height: 5.625em;
    border-radius: 50%;
    color: $pink-salmon;
    background-color: $white;
    z-index: 1;
    box-shadow: 8.75em 6.875em 0 -1.875em, 11.5625em 6.875em 0 -2.1875em,
      10.625em 9.6875em 0 -1.5625em;
  }
}

.poison__flaskContent {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent 50%, $radical-red 50%);
  border-radius: 50%;

  display: flex;
  align-items: center;

  // main content
  &::before,
  &::after {
    --size: 8em;
    content: "";
    position: absolute;
    width: var(--size);
    height: var(--size);
  }

  &::before {
    left: 0;
    background-color: $amaranth;
    border-radius: 50% 50% 0 50%;
    transform: rotate(-45deg);
  }

  &::after {
    right: 0;
    background-color: $radical-red;
    border-radius: 50% 50% 50% 0;
    transform: rotate(45deg);
  }
}

.poison__flaskEye {
  position: absolute;
  top: 2.75em;
  right: 5.1875em;
  width: 2.8125em;
  height: 2.8125em;
  border-radius: 50%;
  background-color: $black-russian;
  box-shadow: 0 0 0 1.25em $texas-rose, -0.625em 0.625em 0 2.8125em $white;
}

.poison__flaskNeck,
.poison__flaskNeckShadow {
  z-index: -1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1.8125em;
    height: 3.75em;
  }

  &::before {
    border-radius: 0 0 10.5em 0;
  }

  &::after {
    right: 0;
    border-radius: 0 0 0 10.5em;
  }
}

.poison__flaskNeck {
  position: absolute;
  top: -2.5em;
  width: 10.5em;
  height: 3.75em;
  overflow: hidden;

  &::before,
  &::after {
    box-shadow: 0 0 0 6.25em $champagne;
  }
}

.poison__flaskNeckShadow {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 1.25em;
  z-index: 1;

  &::before,
  &::after {
    box-shadow: 0 0 0 6.25em $bone;
  }
}

.poison__flaskMouth {
  position: absolute;
  top: calc(-3.8125em - 2.375em);
  width: 10.4375em;
  height: 3.8125em;
  border-radius: 3.8125em;
  background-color: inherit;

  // cork
  &::before {
    content: "";
    position: absolute;
    top: -2.8125em;
    left: 2.3125em;
    width: 3.9375em;
    height: 3.75em;
    border-radius: 0.75em 0.75em 0 0;
    background-color: $texas-rose;
    box-shadow: 1.875em 0 $bright-sun;
    z-index: -1;
  }
}

.poison__skullContainer {
  z-index: 1;
}

.poison__skull {
  position: relative;
  width: 16.0625em;
  height: 16.0625em;
  border-radius: 50%;
  background-color: $white;

  // mandible
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -2.375em;
    width: 10.625em;
    height: 5.1875em;
    border-radius: 0 5.1875em 0 0;
    background-color: inherit;
  }

  // rounder
  &::after {
    content: "";
    position: absolute;
    bottom: 2.5625em;
    right: -6em;
    width: 6.25em;
    height: 6.25em;
    border-radius: 50%;
    box-shadow: -4.5625em 0.9375em 0 -0.9375em $white;
    z-index: -1;
  }
}

.poison__skullShadow {
  position: relative;
  overflow: hidden;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  color: $pumice;

  // mandible
  &::before {
    content: "";
    position: absolute;
    bottom: -0.3125em;
    left: -2.5em;
    width: 10.625em;
    height: 5.1875em;
    border-radius: 0 5.1875em 0 0;
    background-color: currentColor;
  }

  // main
  &::after {
    content: "";
    position: absolute;
    top: 5.125em;
    left: -2.8125em;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: currentColor;
  }
}

.poison__skullEyes {
  position: absolute;
  bottom: 4.25em;
  right: 3.125em;
  width: 4.1875em;
  height: 4.1875em;
  border-radius: 50%;
  background-color: $cod-gray;

  // small eye
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: -2.5em;
    width: 1.875em;
    height: 0.9375em;
    border-radius: 0 0 0.9375em 0.9375em;
    background-color: inherit;
  }
}

.poison__skullHorn {
  color: $athens-gray;
  position: absolute;
  top: -4.375em;
  right: -3.4375em;
  height: 6.25em;
  width: 5.1875em;
  border-radius: 0 0 4.5625em 0;
  border: 1.875em solid;
  border-top: 0;
  box-sizing: border-box;
  z-index: -1;

  // extender
  &::before {
    content: "";
    position: absolute;
    top: -3.125em;
    right: -1.875em;
    width: 1.875em;
    height: 3.4375em;
    border-radius: 1.875em 1.875em 0 0;
    background-color: currentColor;
    box-shadow: -3.375em 2.1875em 0;
  }

  // root/base
  &::after {
    content: "";
    position: absolute;
    bottom: -5.3125em;
    left: -5em;
    width: 4.375em;
    height: 5.625em;
    border-radius: 4.375em 0 0 0;
    border: 1.875em solid;
    border-right: 0;
    border-bottom: 0;
    box-sizing: border-box;
  }
}

.poison__skullHorn--isSecond {
  color: $white;
  right: unset;
  left: -3.4375em;
  transform: scaleX(-1);
}

.poison__mushroomContainer {
  position: relative;
  top: -1.625em;
  z-index: 2;
}

.poison__mushroom {
  color: $just-right;
  position: relative;
  width: 5.0625em;
  height: 2.8125em;
  border: 1em solid;
  border-top: 0;
  border-radius: 0 0 2.8125em 2.8125em;
  box-sizing: border-box;

  // extender
  &::before {
    content: "";
    position: absolute;
    top: -7.5em;
    right: -1em;
    width: 1em;
    height: 7.75em;
    background-color: currentColor;
  }

  // branch
  &::after {
    content: "";
    position: absolute;
    top: -3.75em;
    right: -3.1875em;
    width: 3.1875em;
    height: 3.75em;
    border: inherit;
    border-left: 0;
    border-radius: 0 0 3.1875em 0;
    box-sizing: border-box;
  }
}

.poison__mushroomCaps {
  z-index: 1;
  position: absolute;
  top: -1.875em;
  left: calc(-2.1875em - 0.5em);
  width: 4.375em;
  height: 2.1875em;
  border-radius: 2.1875em 2.1875em 0 0;
  background-color: $bright-sun;
  box-shadow: 3.9375em -6.75em $texas-rose, 6.25em -3.75em $amaranth;
}

.poison__mushroomStem {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2.625em;
  width: 1em;
  height: 2.5em;
  background-color: currentColor;
}

</style>
  