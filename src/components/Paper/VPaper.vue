<template>
  <main class="paper">
    <div class="paper__inner">
      <v-header />
      <v-content />
      <v-sidebar />
    </div>
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
  --paper-padding: 10mm;
  padding: var(--paper-padding);
  background: #fff;
  border-radius: 5px;
}
.paper__inner {
  width: calc(210mm - (var(--paper-padding) * 2));
  min-height: calc(297mm - (var(--paper-padding) * 2));
  box-sizing: content-box;
  display: grid;
  grid-template-rows: auto 12fr;
  grid-template-columns: 13fr 8fr;
  row-gap: 1rem;
  column-gap: 4rem;
}
@media print {
  .paper {
    --paper-padding: 0;
  }
}
</style>