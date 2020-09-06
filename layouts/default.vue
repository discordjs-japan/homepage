<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>

    <Footer />

    <Fab />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

const Fab = () => import('@/components/layout/home/Fab.vue')
const Footer = () => import('@/components/layout/home/Footer.vue')

@Component({
  components: {
    Fab,
    Footer
  }
})
export default class extends Vue {}
</script>
