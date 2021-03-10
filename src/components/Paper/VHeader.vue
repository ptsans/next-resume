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
        <v-chip>
          <v-pin-icon />
          {{ header.location }}
        </v-chip>
        <v-chip>
          <v-person-icon />
          {{ age }}
        </v-chip>
      </div>
    </div>
    <div class="avatar">
      <img :src="`${publicPath}${header.avatar}`" alt="avatar"/>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import VChip from './VChip.vue'
import VPinIcon from '@/components/Icons/VPinIcon.vue'
import VPersonIcon from '@/components/Icons/VPersonIcon.vue'
import HeaderJson from '@/api/header.json'
import { formatAge } from '@/utils/formatAge'

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
    VChip,
    VPinIcon,
    VPersonIcon
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

    const age = computed(() => dateToAge(header.born_date))

    return { header, publicPath, age }
  }
})
</script>

<style scoped>
.header {
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: 13fr 8fr;
  gap: 4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar::v-deep(img) {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}
@media not print {
  @media only screen
  and (max-width: 425px) {
    .header {
      grid-area: auto;
      grid-template-columns: none;
      grid-template-rows: max-content;
      gap: 2rem;
    }
    .content__subtitle {
      line-height: 1;
      padding: 0.5rem 0;
    }
    .avatar {
      grid-row-start: 1;
    }
  }
}
</style>