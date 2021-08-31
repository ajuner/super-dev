import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    const add = () => {
      count.value++;
    };

    return () => <a-button onClick={add}>{count.value}</a-button>;
  },
});
