<script setup>
import page from "@/assets/data/pages/5.json";
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

          <!-- <Contact
            v-else-if="section.acf_fc_layout === 'contact'"
            :data="section"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>
