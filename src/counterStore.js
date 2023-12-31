import { defineStore } from "pinia";
const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});

export default useCounterStore;
