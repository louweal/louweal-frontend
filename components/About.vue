<script setup>
import { reactive, computed } from "vue";

const props = defineProps(["data"]);

// const state = reactive({
//   firstName: 'John',
//   lastName: 'Doe'
// });
// const sizes = ['thumbnail','medium','medium_large', 'large'];
//     for(size in sizes) {
//     }

const mediumLarge = computed(() => {
  return `/images/uploads/${props.data.image.sizes.medium_large.split("/uploads")[1]}`;
  //   return `/images/uploads/solution-kantoor.png`;
});
</script>

<template>
  <section
    v-if="data"
    id="over-mij"
    class="flex min-h-screen flex-col justify-center"
  >
    <div class="row">
      <div class="box md:box-6 mb-8 self-center md:mb-0">
        <h2>{{ data.title }}</h2>

        <Editor :data="data.content" />

        <div class="row gap-y-0">
          <div
            class="box box-4 xl:box-3"
            v-for="(skill, index) in data.skills"
            :key="index"
          >
            <div class="skill">{{ skill.skill }}</div>
          </div>
        </div>
      </div>
      <div
        class="box-10 offset-1 sm:box-8 sm:offset-2 md:box-5 md:offset-1 xl:box-5 self-center"
      >
        <div class="about__visuals">
          <img
            :src="`/images/uploads/${props.data.hover_image.sizes.medium_large.split('/uploads')[1]}`"
            :alt="data.image.alt"
          />
          <img
            :src="`/images/uploads/${props.data.image.sizes.medium_large.split('/uploads')[1]}`"
            :alt="data.image.alt"
          />
        </div>
        <!-- <div class="img-c">
          <img :src="data.image.sizes['medium_large']" :alt="data.image.alt" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<style>
.about {
  &__visuals {
    /* position: absolute; */
    aspect-ratio: 1/1;

    img {
      position: absolute;
      border-radius: 0.3rem;
      transition: opacity 0.4s 0.15s cubic-bezier(0.19, 0, 0.22, 1);
    }

    &:hover {
      img:last-child {
        opacity: 0;
        visibility: hiddenq;
      }
    }
  }
}
.about__visuals,
.img-c {
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0.3rem;
    transform: rotate(6deg);
    background: var(--color-light);
    z-index: -1;
  }

  &:after {
    content: "";
    width: 98%;
    height: 98%;
    position: absolute;
    left: 2%;
    top: 2%;
    border-radius: 0.3rem;
    transform: rotate(2deg);
    border: 6px solid var(--color-secondary);
  }
}

.skill {
  padding-left: 1.3rem;
  position: relative;
  transition: color 0.3s linear;

  &:hover {
    color: var(--color-white);

    &::before,
    &::after {
      color: var(--color-white);
    }
    &::after {
      animation-name: moveChevron;
    }
    &::before {
      animation-name: moveDot;
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    font-weight: 300;
    color: var(--color-secondary);
    animation-duration: 0.7s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    transition: color 0.3s linear;
  }

  &::before {
    content: "•";
    left: 0;
    font-size: 0.75rem;
    padding-top: 5px;
  }

  &::after {
    content: "›";
    left: 0.3rem;
  }
}

@keyframes moveDot {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-30px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes moveChevron {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(8px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
