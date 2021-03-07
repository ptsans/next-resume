<template>
  <v-chip>
    <v-pin-icon />
    <slot></slot>
  </v-chip>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VChip from './VChip.vue'
import VPinIcon from '@/components/Icons/VPinIcon.vue'

export default defineComponent({
  name: 'VLocationChip',
  components: {
    VChip,
    VPinIcon
  }
})
</script>