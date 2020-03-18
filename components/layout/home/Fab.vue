<template>
  <v-btn
    fab
    bottom
    right
    large
    fixed
    aria-label="テーマ切り替え"
    :color="getBtnColor"
    @click="toggleTheme"
  >
    <v-icon>{{ getBrightnessIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { mdiBrightness4, mdiBrightness7 } from '@mdi/js'

const ITEM_KEY = 'homepage_dark_theme'

@Component
export default class extends Vue {
  public toggleTheme (): void {
    const darkmode = !this.isDarkmode()

    this.$vuetify.theme.dark = darkmode

    localStorage.setItem(ITEM_KEY, String(darkmode))
  }

  public isDarkmode (): boolean {
    return localStorage.getItem(ITEM_KEY) === 'true'
  }

  public get getBrightnessIcon (): string {
    return this.$vuetify.theme.dark ? mdiBrightness4 : mdiBrightness7
  }

  public get getBtnColor (): string {
    return this.$vuetify.theme.dark ? 'grey darken-2' : 'light'
  }

  public mounted () {
    this.$vuetify.theme.dark = this.isDarkmode()
  }
}
</script>
