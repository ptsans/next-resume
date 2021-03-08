<template>
  <div class="card">
    <v-title>
      {{ title }}
    </v-title>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import VTitle from './VTitle.vue'

export default defineComponent({
  name: "VCard",
  components: {
    VTitle
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { title } = toRefs<{title: string}>(props)
    return { title }
  }
})
</script>