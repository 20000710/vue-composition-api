<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot/>
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>
        Username is: {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>


<script setup>
 /* USING slots in composition API
import { useSlots } from "vue";

const slots = useSlots()
console.log(slots.title())
*/


/*
  imports
*/
import { inject } from "vue"

/*
  user data
*/
  const userData = inject('userData')

/*
  props
*/
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title specified'
    }
  })

/*
  emits
*/
  const emit = defineEmits(['update:modelValue', 'hideModal'])

/*
  handle button click emit('update:modalProps', value)
*/
// const handleButtonClick = () => {
//   emit('update:modelValue', false)
// }

</script>


<!-- option API
<script>
export default {
  emits: ['hideModal'],
  props: {
    title: {
      type: String,
      default: 'No title specified'
    }
  }
}
</script>
-->


<style>
.modal{
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>