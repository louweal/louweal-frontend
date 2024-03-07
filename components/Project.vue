<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data">
    <h3>{{ data.title }}</h3>

    <p>{{ data.content }}</p>

    <div v-for="(tool, index) in data.stack" :key="index">
      {{ tool.item }}
    </div>

    <a :href="data.repo">Github</a>

    <a :href="data.site">Live site</a>
  </div>
</template>
