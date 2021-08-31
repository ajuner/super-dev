<template>
  <a-button @click="add">
    {{ count }}
  </a-button>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const count = ref(0);
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