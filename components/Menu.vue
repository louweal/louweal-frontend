<script setup>
import { ref } from "vue";
const menu = ref(null);

fetch(`http://louweal.local/wp-json/wp/v2/options/menu`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong");
  })
  .then((data) => (menu.value = data));
</script>

<template>
  <ul class="flex list-none gap-4">
    <li class="" v-for="(item, index) in menu" :key="index">
      <a :href="item.link.url">{{ item.link.title }}</a>
    </li>
  </ul>
</template>
