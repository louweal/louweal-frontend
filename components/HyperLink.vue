<script setup>
defineProps(["class", "data"]);
</script>

<template>
  <a :href="data.url" :class="class" :target="data.target">{{ data.title }}</a>
</template>

<style>
.btn {
  padding: 0.35rem 2rem;
  background-color: var(--color-light);
  border-radius: 0.3125rem;
  color: var(--color-dark);
  line-height: 1.58;
  font-weight: 500;
  transition: background-color 0.24s ease-in-out;
}

.btn:hover,
.btn:active {
  background-color: var(--color-light);
}
</style>
