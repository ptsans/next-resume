<template>
  <v-paper />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VPaper from './components/Paper'

export default defineComponent({
  name: 'App',
  setup() {
  },
  components: {
    VPaper
  }
})
</script>

<style>
:root {
  --primary-main: #000;
  --primary-text: #000;
  --secondary-main: rgba(0, 0, 0, .12);
  --secondary-text: #a5a5a5;
  --body: #e9ecef
}

body {
  margin: 0;
  background: var(--body);
  font-size: 16px;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  justify-content: center;
  padding: 2rem 0;
}
</style>
