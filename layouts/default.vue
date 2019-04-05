<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>Discord.js Japan User Group</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn href="https://github.com/discordjs-japan">
          GitHub
        </v-btn>
        <v-btn href="https://discord.gg/4tpD3TY">
          Discord
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto">
      <v-spacer />
      <h1>MIT License | Copyright &copy; 2019 - {{ new Date().getFullYear() }} {{ author }}</h1>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      author: require('../package').author
    }
  }
}
</script>
