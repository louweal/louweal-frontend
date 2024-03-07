<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data">
    <h2>{{ data.title }}</h2>

    <div v-html="data.content" />

    <ul
      class="inline list-none"
      v-for="(skill, index) in data.skills"
      :key="index"
    >
      <li>{{ skill.skill }}</li>
    </ul>

    <img :src="data.image.sizes.medium" :alt="data.image.alt" />
  </div>
</template>
