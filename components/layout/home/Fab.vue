<template>
  <v-btn
    fab
    bottom
    right
    large
    fixed
    :color="getBtnColor"
    @click="toggleTheme"
  >
    <v-icon>mdi-brightness-{{ getIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

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

  public get getIcon (): string {
    return this.$vuetify.theme.dark ? '4' : '7'
  }

  public get getBtnColor (): string {
    return this.$vuetify.theme.dark ? 'grey darken-2' : 'light'
  }

  public mounted () {
    this.$vuetify.theme.dark = this.isDarkmode()
  }
}
</script>
