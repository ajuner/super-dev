<template>
  <div>
    <img src="assets/logo.png" alt="" />
    <hello-world msg="vue.js" />
  </div>
</template>

<script>
import HelloWorld from './../components/Helloworld.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    HelloWorld,
  },
});
</script>

<style>
</style>