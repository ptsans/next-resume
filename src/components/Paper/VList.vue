<template>
  <ul class="list">
    <li
        v-for="item in items"
        :key="item.title"
        class="list__item"
    >
      <h4 class="list__title">
        <a :class="{['list__title_link']: item.href}" :href="item.href || null">
          {{ item.title }}
        </a>
      </h4>
      <p
          v-for="text in item.body"
          :key="item.title+text"
          class="list__text"
      >
        {{ text }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs} from 'vue'

export type TListItem = {
  title: string
  href?: string
  body: string[]
}

export default defineComponent({
  name: "VList",
  props: {
    items: {
      type: Object as PropType<TListItem[]>,
      required: true
    }
  },
  setup(props) {
    const { items } = toRefs<{items: TListItem[]}>(props)
    return { items }
  }
})
</script>

<style scoped>

.list {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
.list__item {
  --mark-size: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  margin-left: calc(var(--mark-size) / 2);
  border-left: solid thin var(--secondary-main);
}
.list__item::after {
  content: "";
  position: absolute;
  left: calc(var(--mark-size) / -2);
  top: 0;
  width: var(--mark-size);
  height: var(--mark-size);
  background: var(--primary-main);
  border-radius: 50%;
  display: block;
}
.list__item:last-child {
  padding-bottom: 0;
}
.list__title {
  margin: 0 0 0.7rem 0;
  font-size: 1rem;
}
.list__title_link {
  color: var(--primary-text);
  text-decoration: none;
}
.list__title_link:hover {
  text-decoration: underline;
}
.list__text {
  color: var(--secondary-text);
  font-weight: 500;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}
</style>