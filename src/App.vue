<template>
  <v-paper />
  <v-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VPaper from '@/components/Paper'
import VFooter from '@/components/Shared/VFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    VFooter,
    VPaper
  }
})
</script>

<style>
:root {
  --primary-main: #000;
  --primary-text: #000;
  --secondary-main: rgba(0, 0, 0, .12);
  --secondary-text: #747474;
  --body: #e9ecef;
}
html {
  font-size: 16px;
}
body {
  margin: 0;
  background: var(--body);
}
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  justify-content: center;
  padding: 2rem 0;
  row-gap: 2rem;
}
@media print {
  @page {
    size: A4;
    margin: 10mm;
  }
  body {
    background: #fff;
  }
  #app {
    padding: 0;
    -webkit-print-color-adjust: exact;
  }
}
@media not print {
  @media only screen
  and (max-width: 425px) {
    #app {
      padding-top: 0;
    }
  }
}
</style>
