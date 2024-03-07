<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main>
    <Sparkles />
    <Header />

    <div class="container">
      <div class="row h-screen flex-col justify-between py-4">
        <div></div>
        <div class="text-center">
          <h2>{{ error.statusCode }}</h2>
          <button @click="handleError">Terug naar home</button>
        </div>

        <Footer />
      </div>
    </div>
  </main>
</template>
