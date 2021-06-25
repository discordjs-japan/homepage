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
    title: 'Discord.js Japan User Group | Discord.js 日本ユーザーグループ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no,email=no,address=no' },
      { name: 'author', content: 'Discord.js Japan User Group' },

      /** Open Graph Protocol */
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Discord.js 日本ユーザーグループ' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Discord.js Japan User Group' },
      { hid: 'og:description', property: 'og:description', content: 'このサイトはDiscord.jsを使う日本ユーザーの為の活動をしている非公式コミュニティのホームページです。' },
      { hid: 'og:url', property: 'og:url', content: 'https://discordjs-japan.org' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },

      { hid: 'Content-Language', httpEquiv: 'Content-Language', content: 'ja' },
      { hid: 'Content-Type', httpEquiv: 'Content-Type', content: 'utf-8' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' }
    ],
    noscript: [
      {
        innerHTML: 'このサイトを閲覧するにはJavaScriptを有効にしてください。',
        body: true
      }
    ]
  },

  vuetify: {
    icons: {
      iconfont: 'mdiSvg'
    }
  }
}

export default config
