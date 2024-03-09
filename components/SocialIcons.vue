<script setup>
import socials from "@/assets/data/socials.json";
</script>

<template>
  <div
    v-if="socials"
    class="flex flex-row justify-center gap-x-4 gap-y-8 py-5 sm:min-h-screen sm:flex-col"
  >
    <div class="" v-for="(social, index) in socials" :key="index">
      <a :href="social.link" target="_blank"
        ><div :class="`social social--${social.type.value}`"></div
      ></a>
    </div>
  </div>
</template>

<style scoped>
.social {
  position: relative;
  width: 1.8rem;
  height: 1.8rem;

  &:hover {
    &::before {
      filter: invert(100%);
      transform: scale(1.2);
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 2rem;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: invert(76%) sepia(1%) saturate(637%) hue-rotate(109deg)
      brightness(109%) contrast(89%);
    transform-origin: center;
    transition: all 0.2s cubic-bezier(0.19, 0, 0.22, 1);
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
