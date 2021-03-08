<template>
  <main class="paper">
    <v-header />
    <v-content />
    <v-sidebar />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VHeader from './VHeader.vue'
import VContent from './VContent.vue'
import VSidebar from './VSidebar.vue'

export default defineComponent({
  name: 'VPaper',
  components: {
    VHeader,
    VContent,
    VSidebar
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
  grid-template-columns: 13fr 8fr;
  border-radius: 5px;
  row-gap: 1rem;
  column-gap: 4rem;
}
</style>