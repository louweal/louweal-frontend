<script setup>
import socials from "@/assets/data/socials.json";
</script>

<template>
  <div v-if="socials" class="row gap-y-1">
    <div class="box box-6" v-for="(social, index) in socials" :key="index">
      <a :href="social.link" target="_blank">
        <div :class="`social social--${social.type.value}`">
          <span class="social__label">{{ social.type.label }}</span>
        </div></a
      >
    </div>
  </div>
</template>

<style scoped>
.social {
  position: relative;
  padding-left: 2rem;

  &:hover {
    &::before {
      filter: invert(100%);
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1.2rem;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: invert(76%) sepia(1%) saturate(637%) hue-rotate(109deg)
      brightness(109%) contrast(89%);
    transition: filter 0.2s linear;
  }

  &--github::before {
    background-image: url("@/assets/images/github.svg");
  }
  &--linkedin::before {
    background-image: url("@/assets/images/linkedin.svg");
  }
  &--codewars::before {
    background-image: url("@/assets/images/codewars.svg");
  }
  &--devto::before {
    background-image: url("@/assets/images/dev.svg");
  }
  &--devpost::before {
    background-image: url("@/assets/images/devpost.svg");
  }
}
</style>
