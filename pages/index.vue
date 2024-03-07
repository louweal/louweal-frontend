<script setup>
import { ref } from "vue";
const page = ref(null);

let id = 5;

fetch(`http://louweal.local/wp-json/wp/v2/pages/${id}?acf_format=standard`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Something went wrong");
  })
  .then((data) => (page.value = data));
</script>

<template>
  <div v-if="page">
    <div v-if="page.acf.hero">
      <Hero :data="page.acf.hero" />
    </div>

    <div v-if="page.acf.sections">
      <div v-if="page.acf.sections">
        <div v-for="(section, index) in page.acf.sections" :key="index">
          <About v-if="section.acf_fc_layout === 'about'" :data="section" />

          <Projects
            v-else-if="section.acf_fc_layout === 'projects'"
            :data="section"
          />

          <!-- <Tools v-else-if="section.acf_fc_layout === 'tools'" :data="section" /> -->

          <Contact
            v-else-if="section.acf_fc_layout === 'contact'"
            :data="section"
          />
        </div>
      </div>
    </div>
  </div>
</template>
