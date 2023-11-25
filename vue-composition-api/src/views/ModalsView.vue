<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
      </label>
      <input
        v-model="showDarkModals"
        type="checkbox"
      >
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component
      v-model="showModal"
      title="My modal title (via prop)"
      :is="showDarkModals ? ModalDark : Modal"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam doloribus ullam, reprehenderit corporis voluptates temporibus amet quia sequi eius. Provident sequi, tenetur placeat autem perspiciatis quaerat vel iure commodi!</p>
    </component>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

/*
  modals
*/

const showDarkModals = ref(false)
const showModal = ref(false)
</script>

<!--
<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  }
}
</script>
-->