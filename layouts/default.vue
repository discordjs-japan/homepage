<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>

    <v-footer padless class="mt-5">
      <v-card flat width="100%">
        <v-divider />
        <v-card-text>
          <p class="subtitle-2 mb-0">
            Copyright &copy; {{ new Date().getFullYear() }} Discord.js Japan All rights reserved.
          </p>
        </v-card-text>
      </v-card>
    </v-footer>

    <Fab />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'

const Fab = () => import('@/components/layout/home/Fab.vue')

@Component({
  components: {
    Fab
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
