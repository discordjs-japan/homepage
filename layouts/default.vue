<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>

    <v-footer padless>
      <v-card flat width="100%">
        <v-divider />
        <v-card-text>
          <h5 class="subtitle-1">
            Copyright &copy; {{ new Date().getFullYear() }} Discord.js Japan All rights reserved.
          </h5>
        </v-card-text>
      </v-card>
    </v-footer>

    <Fab />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

const Fab = () => import('@/components/layout/home/Fab.vue')

@Component({
  components: {
    Fab
  }
})
export default class extends Vue {}
</script>
