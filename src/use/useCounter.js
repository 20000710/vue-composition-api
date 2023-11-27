import { reactive, computed, watch, onMounted, nextTick } from 'vue'

// to make this reactive global, put this counterData outside of the function
const counterData = reactive({
  count: 0,
  title: 'My Title'
})

export function useCounter(){

  watch(() => counterData.count, (newCount, oldCount) => {
    if(newCount === 20) {
      alert('Wait to go! You made it to 20!')
    }
  })

  const oddOrEven = computed(()=> {
    if(counterData.count % 2 === 0) return 'even'
    return 'odd'
  })

  const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
    console.log('do something when counter has updated in the dom')
  }

  const decreaseCounter = amount => {
    if(counterData.count === 0 ){
      counterData.count = 0
    } else{
      counterData.count -= amount
    }
  }

  onMounted(() => {
    console.log('Do stuff related to Counter')
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }

}