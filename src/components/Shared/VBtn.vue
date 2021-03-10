<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VBtn'
})
</script>

<style scoped>
.button {
  background: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--secondary-text);
  border-radius: 5px;
  transition: color ease .2s;
  user-select: none;
}
.button:hover {
  color: #000;
}
</style>