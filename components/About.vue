<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" id="over-mij">
    <div class="row">
      <div class="box md:box-6 mb-8 self-center md:mb-0">
        <h2>{{ data.title }}</h2>

        <div v-html="data.content" />

        <ul
          class="inline list-none"
          v-for="(skill, index) in data.skills"
          :key="index"
        >
          <li>{{ skill.skill }}</li>
        </ul>
      </div>
      <div
        class="box-10 offset-1 sm:box-8 sm:offset-2 md:box-5 md:offset-1 xl:box-5 self-center"
      >
        <div class="img-c">
          <img :src="data.image.sizes['medium']" :alt="data.image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.img-c {
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0.3rem;
    transform: rotate(6deg);
    background: var(--color-light);
    z-index: -1;
  }

  &:after {
    content: "";
    width: 98%;
    height: 98%;
    position: absolute;
    left: 2%;
    top: 2%;
    border-radius: 0.3rem;
    transform: rotate(2deg);
    border: 6px solid var(--color-secondary);
  }
}
</style>
