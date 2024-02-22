<script setup lang="ts">
import NavbarSection from '@/components/NavbarSection.vue'
import { onBeforeMount, onMounted } from 'vue'
import { userPreferenceStore } from './store/userPreferences'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import { type DaisyThemes, useThemeManager, daisyThemes } from '@/plugins/themeManager'
import * as tsSdk from './helpers/tsSdk'

const preference = userPreferenceStore()
const i18n = useI18n()
const $theme = useThemeManager()

onBeforeMount(() => {
  // Add a script tag to the page to download the ts-platform sdk
  const platformScript = document.createElement('script')
  platformScript.src = import.meta.env.VITE_PLATFORM_SDK_URL
  platformScript.defer = true
  platformScript.id = 'ts-platform-script'
  document.head.appendChild(platformScript)

  // Then, initialize the ts-platform sdk
  tsSdk.initWhenLoaded()
})

onMounted(() => {
  // Set the language based on saved preferences
  if (preference.language !== '' && i18n.locale.value !== preference.language)
    i18n.locale.value = preference.language

  // Set the theme based on the .env configuration or saved preferences
  const theme = preference.theme || import.meta.env.VITE_THEME || 'corporate'
  $theme.set(theme as DaisyThemes)
})
</script>

<template>
  <div class="min-h-screen overflow-auto flex flex-col">
    <navbar-section />
    <router-view />
  </div>
</template>
