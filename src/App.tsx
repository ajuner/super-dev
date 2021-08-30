import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const count = ref(0);

    const add = () => {
      count.value++;
    };

    return () => <div onClick={add}>{count.value}</div>;
  },
});
