<template>
  <main class="paper">
    <v-header>
      <template #full-name>
        {{header.full_name}}
      </template>
      <template #job-position>
        {{header.job_position}}
      </template>
      <template #avatar>
        <img :src="`${publicPath}${header.avatar}`" alt="avatar"/>
      </template>
    </v-header>
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from 'vue'
import VHeader from './VHeader.vue'

export type THeader = {
  full_name: string
  job_position: string
  avatar: string
}

export default defineComponent({
  name: 'VPaper',
  components: {
    VHeader
  },
  props: {
    header: {
      type: Object as PropType<THeader>,
      required: true
    }
  },
  setup(props) {
    const {
      header
    } = toRefs<{header: THeader}>(props)

    const publicPath = ref(process.env.BASE_URL)

    return { header, publicPath }
  }
})
</script>

<style scoped>
.paper {
  width: 210mm;
  height: 296mm; /*Fix -1px page break*/
  padding: 10mm;
  background: #fff;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 2fr 12fr;
  grid-template-columns: 12fr 8fr;
  border-radius: 5px;
}
</style>