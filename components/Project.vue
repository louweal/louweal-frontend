<script setup>
defineProps(["data"]);
</script>

<template>
  <div
    v-if="data"
    class="bg-secondary-20 flex h-full flex-col justify-between overflow-hidden rounded-lg"
  >
    <div class="p-5 pb-6">
      <h3>{{ data.title }}</h3>

      <div class="mb-2 flex flex-wrap gap-x-2">
        <div
          v-for="(tool, index) in data.stack"
          :key="index"
          class="text-light whitespace-nowrap font-bold text-white"
        >
          {{ tool.item }}
        </div>
      </div>

      <p>{{ data.content }}</p>
    </div>

    <div
      class="bg-secondary-20 flex gap-x-5 border-t border-[rgba(0,0,0,0.175)] p-5"
    >
      <a :href="data.repo" class="flex gap-x-2">
        <Icon name="github" class="h-6 w-6" /> Github
      </a>

      <a :href="data.site" class="flex gap-x-2">
        <Icon name="globe" class="h-6 w-6" /> Live site
      </a>
    </div>
  </div>
</template>

<style scoped></style>
