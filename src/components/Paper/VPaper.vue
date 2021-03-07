<template>
  <main class="paper">

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VPaper',
  components: {
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
}
</style>