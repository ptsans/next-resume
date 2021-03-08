<template>
  <section class="content">
    <v-card title="О себе">
      <v-text v-for="(paragraph, index) in content.about.split('\n')" :key="index">
        {{ paragraph }}
      </v-text>
    </v-card>
    <v-card title="Опыт работы">
      <v-text>{{ content.work_experience }}</v-text>
      <v-text>Весь опыт &#8211; {{ commonWorkYear }}.</v-text>
    </v-card>
    <v-card title="Актуальные pet-проекты">
      <v-list :items="content.projects" />
    </v-card>
    <v-card title="Образование">
      <v-list :items="content.education" />
    </v-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import ContentJson from '@/api/content.json'
import VCard from './VCard.vue'
import VText from './VText.vue'
import VList, { TListItem } from './VList.vue'
import { formatAge } from '@/utils/formatAge'

type TContent = {
  about: string,
  education: TListItem[]
  work_experience: string
  projects: TListItem[]
}

export default defineComponent({
  name: "VContent",
  components: {
    VCard,
    VText,
    VList
  },
  setup() {
    const content = reactive<TContent>(ContentJson)
    const commonWorkYear = computed(() => formatAge(new Date().getFullYear() - 2016))
    return { content, commonWorkYear }
  }
})
</script>