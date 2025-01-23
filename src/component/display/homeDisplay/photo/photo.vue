<template>
    <div class="nintendo">
      <div class="container">
        <div class="heart-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="heart"
          >
            <path
              d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
            />
          </svg>
        </div>
      </div>
      <div class="nintendo-right">
        <div class="minor-buttons"></div>
        <div class="major-button"></div>
        <div class="extra-button"></div>
        <div class="plus-button">
          <div class="minus-button"></div>
          <div class="minus-button"></div>
        </div>
      </div>
      <div class="nintendo-left">
        <div class="minor-buttons"></div>
        <div class="major-button"></div>
        <div class="extra-button"></div>
        <div class="minus-button"></div>
      </div>
      <div class="intersection-right">
        <div class="intersection-left"></div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.heart-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
}

.heart {
  fill: #fe4b3c;
  width: 120px;
  height: 120px;
}

.nintendo-left,
.nintendo-right {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  position: absolute;
}

.nintendo-left {
  background: #03b9e2;
  left: calc(-1 * 45px);
  top: -5px;
}

.nintendo-right {
  background: #fe4b3c;
  right: calc(-1 * 45px);
  bottom: -5px;
}

.nintendo {
  position: relative;
  margin: 40px auto;
  width: 610px;
  height: 270px;
}

.intersection-left {
  position: absolute;
  top: -10px;
  width: 100%;
  left: calc(-1 * 45px);
  height: 100%;
  background: #191c30;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}

.intersection-right {
  overflow: hidden;
  top: 5px;
  width: calc(100% - 45px);
  height: 100%;
  position: relative;
  right: calc(-1 * 45px);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}

.major-button {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: #191c30;
  position: absolute;
}

.nintendo-left > .major-button {
  top: 45px;
  left: 25px;
}

.nintendo-right > .major-button {
  right: 25px;
  top: 115px;
}

.minor-buttons {
  width: 21px;
  height: 21px;
  background: #191c30;
  position: absolute;
  border-radius: 50%;
  box-shadow: #191c30 21px 21px 0 0, #191c30 -21px 21px 0 0, #191c30 0 42px 0 0;
}

.nintendo-right > .minor-buttons {
  right: 35px;
  top: 30px;
}

.nintendo-left > .minor-buttons {
  top: 110px;
  left: 35px;
}

.extra-button {
  background: #191c30;
  position: absolute;
}

.nintendo-left > .extra-button {
  width: 17px;
  height: 17px;
  border-radius: 4px;
  left: 60px;
  top: 185px;
}

.nintendo-right > .extra-button {
  width: 21px;
  height: 21px;
  border-radius: 50%;
  right: 60px;
  top: 175px;
}

.minus-button {
  width: 17px;
  height: 6px;
  border-radius: 2px;
  position: absolute;
  background: #191c30;
}

.nintendo-left > .minus-button {
  left: 66px;
  top: 25px;
}

.nintendo-right > .plus-button {
  right: 85px;
  top: 17px;
  position: absolute;
}

.nintendo-right > .plus-button > .minus-button:nth-child(2) {
  transform: rotate(90deg);
}

</style>
  