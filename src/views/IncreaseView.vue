<script>
import useCounterStore from "@/counterStore.js";
export default {
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
};
</script>

<template>
  <button @click="counterStore.increase">Increase</button>
</template>

<style scoped>
button {
  widows: 300px;
  font-size: 20px;
  padding: 5px;
  background-color: aquamarine;
}
</style>
