<script setup>
defineProps(["data"]);
</script>

<template>
  <div v-if="data" class="row min-h-screen py-4" id="contact">
    <div class="box md:box-5 mb-4 self-center md:mb-0">
      <div class="">
        <h2>{{ data.title }}</h2>

        <Editor :data="data.content" />

        <Socials />
      </div>
    </div>
    <div class="box md:box-7 lg:box-6 xl:box-5 lg:offset-1 self-center">
      <div class="contact__form rounded-lg p-12">
        <Icon name="envelope" class="mb-4 h-12 w-12" />

        <Form :id="+data.form" />
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
