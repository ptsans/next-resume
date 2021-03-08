<template>
  <section class="sidebar">
    <v-card title="Контакты">
      <v-text v-for="contact in sidebar.contacts" :key="contact.href">
        <template #icon>
          <component :is="contact.icon" />
        </template>
        <a :href="contact.href">{{contact.label}}</a>
      </v-text>
    </v-card>
    <v-card title="Занятость">
      <v-text v-for="(paragraph, index) in sidebar.job_time.split('\n')" :key="index">
        {{ paragraph }}
      </v-text>
    </v-card>
    <v-card title="Навыки">
      <v-text class="text_grey">
        По значимости
      </v-text>
      <v-text v-for="skill in sidebar.skills" :key="skill">
        {{skill}}
      </v-text>
    </v-card>
    <v-card title="Языки">
      <v-text v-for="language in sidebar.languages" :key="language.title">
        {{language.title}} &#8211; {{language.level}}
      </v-text>
    </v-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VCard from './VCard.vue'
import VText from './VText.vue'
import VEmailIcon from '@/components/Icons/VEmailIcon.vue'
import VTelegramIcon from '@/components/Icons/VTelegramIcon.vue'
import VGithubIcon from '@/components/Icons/VGithubIcon.vue'
import SidebarJson from '@/api/sidebar.json'

type TContact = {
  icon: string
  label: string
  href: string
}

type TLanguage = {
  title: string
  level: string
}

type TSidebar = {
  contacts: TContact[]
  job_time: string,
  skills: string[],
  languages: TLanguage[]
}

export default defineComponent({
  name: "VSidebar",
  components: {
    VCard,
    VText,
    VEmailIcon,
    VTelegramIcon,
    VGithubIcon
  },
  setup() {
    const sidebar = reactive<TSidebar>(SidebarJson)
    return { sidebar }
  }
})
</script>