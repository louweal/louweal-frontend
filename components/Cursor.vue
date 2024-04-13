<script setup>
import { ref, onMounted } from "vue";

const cursor = ref();

// onMounted(() => {
//   const cursors = document.querySelectorAll(".cursor");
//   if (cursors) {
//     [].forEach.call(cursors, (cursor) => {
//       document.addEventListener("mousemove", function (e) {
//         const posX = e.clientX;
//         const posY = e.clientY;
//         cursor.style.top = `${posY}px`;
//         cursor.style.left = `${posX}px`;
//       });
//     });
//   }
// });
</script>

<template>
  <div class="cursor" ref="cursor"></div>
</template>

<style scoped>
.cursor {
  display: none;
  opacity: 0;
  visibility: hidden;
  width: 9.2631rem;
  height: 9.2631rem;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: -4.625rem;
  margin-left: -4.625rem;
  z-index: 30;
  pointer-events: none;
  /* background-image: url("~/assets/svg/cursor.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotate 4.5s linear infinite;

  @media (--lg) {
    opacity: 1;
    visibility: visible;
  }
}
</style>
