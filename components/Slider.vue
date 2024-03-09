<script setup>
//https://www.youtube.com/watch?v=YS4Zg_hbQ1o&ab_channel=LunDev
</script>

<template>
  <div class="container-left">
    <div class="slider">
      <div class="slider__wrapper border">
        <div class="slide bg-secondary-20" v-for="i in 99" :key="i"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  overflow-x: scroll;

  &__wrapper {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .slide {
    min-width: 400px;
    min-height: 500px;
  }
}
</style>
