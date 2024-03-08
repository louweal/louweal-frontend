<script setup>
import menu from "@/assets/data/menus/menu.json";
</script>

<template>
  <ul class="flex list-none gap-4" v-if="menu">
    <li class="" v-for="(item, index) in menu" :key="index">
      <a :href="item.link.url">{{ item.link.title }}</a>
    </li>
  </ul>
</template>
