<template>
  <p class="text">
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "VText",
})
</script>

<style>
.text {
  margin: 1rem 0;
  font-size: 1rem;
  white-space: pre-wrap;
}
</style>