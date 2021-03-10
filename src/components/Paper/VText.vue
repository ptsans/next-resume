<template>
  <p class="text">
    <slot name="icon" />
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "VText",
})
</script>

<style scoped>
.text {
  margin: 0.8rem 0;
  font-size: 1rem;
  white-space: pre-line;
  display: flex;
  place-items: center;
  color: var(--primary-text);
}
.text::v-deep(svg) {
  width: 1.3rem;
  margin-left: 0.1rem;
  margin-right: 0.5rem;
  fill: var(--primary-main);
}
.text::v-deep(a) {
  color: var(--primary-text);
  text-decoration: none;
}
.text::v-deep(a:hover) {
  text-decoration: underline;
}
.text_grey {
  color: var(--secondary-text);
  font-weight: 500;
}
</style>