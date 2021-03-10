<template>
  <footer class="footer">
    <v-btn @click="print">
      Распечатать
    </v-btn>
    <v-btn @click="download">
      Скачать
    </v-btn>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VBtn from './VBtn.vue'

export default defineComponent({
  name: "VFooter",
  components: {
    VBtn
  },
  setup() {
    const print = () => {
      return window.print()
    }

    const download = () => {
      const a = document.createElement('a')
      a.setAttribute('download', 'Elizov Vadim Resume')
      a.setAttribute('href', encodeURIComponent('Elizov Vadim Resume.pdf'))
      a.click()
      return 1
    }

    return { print, download }
  }
})
</script>

<style scoped>
.footer {
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
}
@media print {
  .footer {
    display: none;
  }
}
</style>