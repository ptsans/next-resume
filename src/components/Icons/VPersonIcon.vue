<template>
  <svg
      id="VInfoIcon"
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      viewBox="0 0 512 512"
      style="enable-background:new 0 0 111.577 111.577;" xml:space="preserve"
      :fill="fill"
  >
    <path d="m433 512c-11.046 0-20-8.954-20-20 0-78.299-63.701-142-142-142h-30c-78.299 0-142 63.701-142 142 0 11.046-8.954 20-20 20s-20-8.954-20-20c0-100.355 81.645-182 182-182h30c100.355 0 182 81.645 182 182 0 11.046-8.954 20-20 20z"/>
    <path d="m254 270c-74.439 0-135-60.561-135-135s60.561-135 135-135 135 60.561 135 135-60.561 135-135 135zm0-230c-52.383 0-95 42.617-95 95s42.617 95 95 95 95-42.617 95-95-42.617-95-95-95z"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'VPersonIcon',
  props: {
    fill: {
      type: String,
      default: '#000'
    }
  },
  setup(props) {
    const { fill } = toRefs<{fill: string}>(props)

    return { fill }
  }
})
</script>