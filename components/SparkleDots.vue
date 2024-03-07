<template>
  <div
    class="sparkle"
    :style="{
      background: randomGradient,
      left: randomXPos,
      top: randomYPos,
      width: randomSize,
      height: randomSize,
      animationDelay: randomDelay,
    }"
  />
</template>

<script setup>
const { min = 0, max = 110 } = defineProps(["min", "max"]);

const randomColor = (min, max) => min + Math.ceil(Math.random() * (max - min));

const randomRGB = (opacity) => `rgba(
    ${randomColor(0, 200)}, 
    ${randomColor(204, 244)}, 
    ${randomColor(150, 230)}, ${opacity}
  )`;

const randomGradient = `radial-gradient( circle, ${randomRGB(0.25)} 0%, ${randomRGB(0.5)} 100%)`;

const randomXPos = Math.ceil(Math.random() * 100) + "%";
const randomYPos = min + Math.ceil(Math.random() * (max - min)) + "%";
const randomSize = 2 + Math.ceil(Math.random() * 6) + "px";
const randomDelay = Math.ceil(Math.random() * 15) + "s";
</script>

<style scoped>
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: scale(10%);
    opacity: 0.3;
  }
  66% {
    transform: scale(100%) translate(0px, -50px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
