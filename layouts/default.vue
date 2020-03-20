<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>

    <Footer />

    <Fab />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

const Fab = () => import('@/components/layout/home/Fab.vue')
const Footer = () => import('@/components/layout/home/Footer.vue')

@Component({
  components: {
    Fab,
    Footer
  }
})
export default class extends Vue {
  public head (): MetaInfo {
    return {
      link: [
        { rel: 'canonical', href: `https://discordjs-japan.org${this.$route.path}` }
      ]
    }
  }
}
</script>
