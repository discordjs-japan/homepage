import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',

  modules: [
    'nuxt-webfontloader'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],

  head: {
    titleTemplate: '%s - Discord.js 日本ユーザーグループ',
    title: 'Discord.js Japan User Group | Discord.js 日本ユーザーグループ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discord.jsを使う日本ユーザーの為の活動をしています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  vuetify: {
    icons: {
      iconfont: 'mdiSvg'
    }
  }
}

export default config
