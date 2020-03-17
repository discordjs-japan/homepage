import { Configuration } from '@nuxt/types'

const routerConfig: Configuration = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/homepage/'
  }
} : {}

const config: Configuration = {
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],

  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Discord.js Japan User Group | Discord.js 日本ユーザーグループ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discord.jsを使う日本ユーザーの為の活動をしています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' }
    ]
  },

  ...routerConfig
}

export default config
