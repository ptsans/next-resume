<template>
  <section class="header">
    <div class="content">
      <h1 class="content__title">
        {{ header.full_name }}
      </h1>
      <h2 class="content__subtitle">
        {{ header.job_position }}
      </h2>
      <div class="content__tags">
        <v-location-chip>
          {{ header.location }}
        </v-location-chip>
        <v-age-chip>
          {{ age }}
        </v-age-chip>
      </div>
    </div>
    <div class="avatar">
      <img :src="`${publicPath}${header.avatar}`" alt="avatar"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import VLocationChip from './VLocationChip.vue'
import VAgeChip from './VAgeChip.vue'
import HeaderJson from '@/api/header.json'

type TDate = {
  year: number
  month: number
  day: number
}

type THeader = {
  full_name: string
  job_position: string
  avatar: string
  location: string
  born_date: TDate
}

export default defineComponent({
  name: 'VHeader',
  components: {
    VLocationChip,
    VAgeChip
  },
  setup() {
    const header = reactive<THeader>(HeaderJson)
    const publicPath = ref(process.env.BASE_URL)

    const dateToAge = (date: TDate): string => {
      const currentDate = new Date()
      const currentMonth = currentDate.getMonth() + 1
      let age = currentDate.getFullYear() - date.year

      if (currentMonth < date.month ) {
        age -= 1
      } else if (currentMonth === date.month) {
        if (currentDate.getDate() < date.day) {
          age -= 1
        }
      }

      return formatAge(age)
    }
    const formatAge = (age: number): string => {
      /*
      * 0 лет
      * 1 год
      * 2-4 года
      * 5-9 лет
     */
      const mod = age % 10
      switch (true) {
        case mod === 1:
          return `${age} год`
        case mod > 1 && mod < 5:
          return `${age} года`
        case mod === 0 || (mod > 4 && mod <= 9):
          return `${age} лет`
        default:
          return `${age}`
      }
    }

    const age = computed(() => dateToAge(header.born_date))

    return { header, publicPath, age }
  }
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
  line-height: 1.1;
}
.content__subtitle {
  font-size: 1.5rem;
  line-height: 1.6;
  color: var(--secondary-text)
}
.content__tags {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: min-content;
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
.avatar::v-deep(img) {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>