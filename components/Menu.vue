<script setup>
const glob = import.meta.glob("@/assets/data/menus/menu.json", {
  eager: true,
});

let filename = Object.keys(glob)[0];

let menu = undefined;
if (filename) {
  menu = glob[filename].default;
}
</script>

<template>
  <ul class="flex list-none gap-4" v-if="menu">
    <li class="" v-for="(item, index) in menu" :key="index">
      <a :href="item.link.url">{{ item.link.title }}</a>
    </li>
  </ul>
</template>
