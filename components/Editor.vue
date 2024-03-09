<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="editor" v-html="data" />
</template>

<style scoped>
.editor {
  :deep(p) {
    margin-bottom: 1rem;
  }

  :deep(a) {
    color: var(--color-white);

    &:hover {
      color: var(--color-secondary);
    }
  }
}
</style>
