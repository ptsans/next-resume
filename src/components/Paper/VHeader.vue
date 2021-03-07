<template>
  <section class="header">
    <div class="content">
      <h1 class="content__title">
        <slot name="full-name">
          Please type your full name
        </slot>
      </h1>
      <h2 class="content__subtitle">
        <slot name="job-position">
          Please type your job position
        </slot>
      </h2>
      <div class="content__tags">
        <slot name="header-tags" />
      </div>
    </div>
    <div class="avatar">
      <slot name="avatar">
        <img alt="avatar" src="" />
      </slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VHeader'
})
</script>

<style scoped>
.header {
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: 12fr 8fr;
}
.content__title, .content__subtitle {
  margin: 0;
}
.content__title {
  font-size: 2.5rem;
}
.content__subtitle {
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--secondary-text)
}
.avatar {
  place-self: center;
  background: var(--secondary-main);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.avatar >>> img {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>