<template>
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
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {}
</script>
