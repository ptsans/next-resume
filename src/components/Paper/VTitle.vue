<template>
  <h3 class="title">
    <slot />
  </h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "VTitle"
})
</script>

<style scoped>
.title {
  margin: 1rem 0;
  font-size: 1.2rem;
}
</style>