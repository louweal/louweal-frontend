<script setup>
defineProps(["data"]);
</script>

<template>
  <section
    v-if="data"
    class="flex min-h-screen flex-col justify-center py-8"
    id="projecten"
  >
    <div class="row">
      <div class="box self-center">
        <h2>{{ data.title }}</h2>

        <Editor :data="data.content" />

        <div class="row">
          <div
            v-for="(project, index) in data.list"
            :key="index"
            class="box md:box-6 lg:box-4 mb-8"
          >
            <Project :data="project" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
