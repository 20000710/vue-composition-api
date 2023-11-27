<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />

    <div>
      <button
        @click="increaseCounter(1)"
        class="counter-button"
        :class="{ 'yellow' : oddOrEven === 'odd'}"
      >{{counterData.count}}</button>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/

import { vAutofocus } from '@/directives/vAutofocus'
import { ref } from 'vue'
import {useCounter} from '@/use/useCounter'

/*
  posts
*/
const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  },
  {
    id: 3,
    title: 'Post 3'
  }
])

/*
  counter_button
*/

const {counterData, increaseCounter, oddOrEven} = useCounter()
</script>

<style scoped>
ul {
  margin: 30px;
}
.counter-button{
  font-size: 60px;
  background-color: #cb98a1;
  width: 100%;
}

.counter-button.yellow{
  background-color: yellow
}
</style>