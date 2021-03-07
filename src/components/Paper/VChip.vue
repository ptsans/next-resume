<template>
  <div class="chip">
    <slot name="icon" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VChip'
})
</script>

<style scoped>
.chip {
  display: flex;
  place-items: center;
  font-size: 0.9rem;
  color: var(--secondary-text);
  font-weight: 500;
}
.chip::v-deep(svg) {
  width: 1rem;
  margin-right: 0.2rem;
  fill: var(--secondary-text);
}
</style>