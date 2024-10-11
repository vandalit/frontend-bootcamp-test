<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
<template>
  <div class="home">
    <h1>Home Page</h1>
    <button @click="fetchData">Fetch API Data</button>
    <div v-if="data">
      <h2>API Data:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
.home {
  h1 {
    color: #42b983;
  }
  button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
}
</style>
