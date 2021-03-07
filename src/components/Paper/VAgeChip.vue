<template>
  <v-chip>
    <v-person-icon />
    <slot></slot>
  </v-chip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VChip from './VChip.vue'
import VPersonIcon from '@/components/Icons/VPersonIcon.vue'

export default defineComponent({
  name: 'VAgeChip',
  components: {
    VPersonIcon,
    VChip
  }
})
</script>