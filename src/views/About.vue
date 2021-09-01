<template>
  <a-button @click="add">
    {{ count }}
  </a-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const count = ref<number>(0);
    const add = () => {
      count.value++;
    };
    return {
      count,
      add,
    };
  },
});
</script>

<style>
</style>