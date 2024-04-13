<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="flex min-h-screen flex-col justify-center">
    <div>
      <div v-html="data.title" class="pb-4 text-light" />

      <div class="row pb-4">
        <div class="box lg:box-5">
          <div v-html="data.content" />
        </div>
      </div>

      <Button class="btn" :data="data.link" />
    </div>
  </div>
</template>

<style scoped>
:deep(h2) {
  font-size: 1rem;
  font-weight: 300;
  /* color: var(--color-secondary); */
}
</style>
