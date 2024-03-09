<template>
  <div class="background fixed left-0 top-0 h-screen w-screen">
    <sparkle-dots v-for="i in 50" :key="i" />
    <sparkle-dots v-for="j in 50" :min="66" :key="'j' + j" />
    <sparkle-dots v-for="k in 50" :min="33" :key="'k' + k" />

    <!-- <sparkle-dots v-for="i in 100" :key="'l' + i" class="d-none d-lg-block" />
    <sparkle-dots
      v-for="j in 100"
      :min="66"
      :key="'m' + j"
      class="d-none d-lg-block"
    />
    <sparkle-dots
      v-for="k in 100"
      :min="33"
      :key="'n' + k"
      class="d-none d-lg-block"
    /> -->
  </div>
</template>

<style scoped>
.background {
  z-index: -1;
  background-color: var(--color-dark);
  background: linear-gradient(
    180deg,
    var(--color-primary) 0%,
    var(--color-dark) 75%
  );
}
</style>
