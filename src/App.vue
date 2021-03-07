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
body {
  margin: 0;
  background: #e9ecef;
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
