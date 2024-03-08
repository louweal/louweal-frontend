<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" id="over-mij">
    <div class="row">
      <div class="box md:box-6 mb-8 self-center md:mb-0">
        <h2>{{ data.title }}</h2>

        <Editor :data="data.content" />

        <div class="row gap-y-0">
          <div
            class="box box-6 sm:box-4"
            v-for="(skill, index) in data.skills"
            :key="index"
          >
            <div class="skill">{{ skill.skill }}</div>
          </div>
        </div>
      </div>
      <div
        class="box-10 offset-1 sm:box-8 sm:offset-2 md:box-5 md:offset-1 xl:box-5 self-center"
      >
        <div class="img-c">
          <img :src="data.image.sizes['medium_large']" :alt="data.image.alt" />
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

.skill {
  padding-left: 1.3rem;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 300;
    color: var(--color-secondary);
  }

  &::before {
    content: "•";
    left: 0;
    font-size: 0.75rem;
    padding-top: 0.187rem;
  }

  &::after {
    content: "›";
    left: 0.3rem;
  }
}
</style>
