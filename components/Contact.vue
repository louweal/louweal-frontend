<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="row h-screen py-4">
    <div class="box-5 test self-center">
      <div class="">
        <h2>{{ data.title }}</h2>

        <div v-html="data.content" />

        <div>socuals</div>
      </div>
    </div>
    <div class="box-5 lg:offset-1 self-center">
      <div class="contact__form rounded-lg p-12">
        {{ data.form }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  &__form {
    background-color: rgba(231, 210, 207, 0.2);
  }
}
</style>
