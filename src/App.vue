<script>
import IncreaseView from "./views/IncreaseView.vue";
import DecreaseView from "./views/DecreaseView.vue";
import useCounterStore from "./counterStore.js";
export default {
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
  components: {
    IncreaseView,
    DecreaseView,
  },
};
</script>

<template>
  <div class="">
    <IncreaseView />
    <h1>Count: {{ counterStore.count }}</h1>
    <DecreaseView />
    <h1>DoubleCount: {{ counterStore.doubleCount }}</h1>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin-top: 50px;
}
</style>
