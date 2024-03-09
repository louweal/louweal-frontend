<script setup>
const { id } = defineProps(["id"]);
import { ref } from "vue";

const formData = ref(null);

import(`@/assets/data/forms/${id}.json`).then((module) => {
  formData.value = module.default;
});
</script>

<template>
  <form class="form" v-if="formData" :name="`form-${id}`">
    <div v-for="(field, i) in formData.acf.fields" :key="i" class="">
      <div class="mb-4">
        <!-- <label :for="field.label"> Username </label> -->

        <div v-if="field.type.value === 'checkbox'">
          <div v-for="(option, i) in field.options" :key="i">
            <input
              type="checkbox"
              :id="`option-${i}`"
              class="bg-secondary-20"
            />
            <label :for="`option-${i}`"> {{ option.option }} </label>
          </div>
        </div>
        <textarea
          v-else-if="field.type.value === 'textarea'"
          class="bg-secondary-20 field"
          rows="6"
          :placeholder="field.label"
        ></textarea>

        <input
          v-else-if="field.type.value === 'submit'"
          type="submit"
          :value="field.label"
          class="btn"
        />

        <input
          v-else
          :type="field.type.value"
          class="bg-secondary-20 field focus:ring focus:ring-opacity-50"
          :name="field.label"
          :placeholder="field.label"
        />
      </div>
    </div>
  </form>
</template>

<style>
.field {
  appearance: none;
  width: 100%;
  border-radius: 0.3125rem;
  padding: 0.75rem 1rem;
  line-height: 1.25;
  border: none;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-light);
  }
}

.form {
  [type="submit"] {
    cursor: pointer;
  }

  [type="checkbox"],
  [type="radio"] {
    border: none;
    border-radius: 0.1875rem;
    margin-right: 0.6rem;

    &:checked {
      background-color: rgba(231, 210, 207, 0.2);
    }
  }
}
</style>
