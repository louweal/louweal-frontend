<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="row h-screen py-10">
    <div class="box self-center">
      <h2>{{ data.title }}</h2>

      <div v-html="data.content" />

      <div class="row">
        <div
          v-for="(project, index) in data.list"
          :key="index"
          class="box lg:box-4"
        >
          <Project :data="project" />
        </div>
      </div>
    </div>
  </div>
</template>
