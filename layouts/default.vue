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

const Footer = () => import('@/components/layout/home/Footer.vue')
const Fab = () => import('@/components/layout/home/Fab.vue')

@Component({
  components: {
    Footer,
    Fab
  }
})
export default class extends Vue {}
</script>
