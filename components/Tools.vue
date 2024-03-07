<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data">
    <h2>{{ data.title }}</h2>

    <div v-html="data.content" />

    {{ data.list }}
  </div>
</template>
