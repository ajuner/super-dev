<template>
  <div class="main">{{msg}}</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return {
            msg: '1234'
        }
    }
})
</script>

<style>
.main {
    color: red
}
</style>