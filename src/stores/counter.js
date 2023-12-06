import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title',
  }),
  actions: {
    increaseCounter(amount){
      this.count += amount;
    },
    decreaseCounter(amount){
      const subtract = this.count - amount
      if(subtract < 0){
        this.count = 0
      }else{
        this.count -= amount;
      }
    }
  },
  getters: {
    oddOrEven: (state) => {
      if(state.count % 2 === 0) return 'even'
      return 'odd'
    }
  }
});

// make sure to pass the right store definition, `useAuth` in this case.
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
// }
