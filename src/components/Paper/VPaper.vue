<template>
  <main class="paper">
    <v-header />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VHeader from './VHeader.vue'

export default defineComponent({
  name: 'VPaper',
  components: {
    VHeader,
  }
})
</script>

<style scoped>
.paper {
  width: 210mm;
  height: 296mm; /*Fix -1px page break*/
  padding: 10mm;
  background: #fff;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 12fr;
  grid-template-columns: 12fr 8fr;
  border-radius: 5px;
}
</style>