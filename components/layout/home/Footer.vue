<template>
  <v-footer class="mt-5">
    <v-container class="px-0">
      <v-row>
        <v-col v-for="(category, index) in categorys" :key="index" cols="3">
          <strong class="d-block mb-5" v-text="category.title" />

          <li v-for="(item, i) in category.items" :key="i" class="mb-3">
            <nuxt-link
              v-if="item.nuxtLink"
              :to="item.url"
              v-text="item.text"
            />

            <a
              v-else
              :href="item.url"
              v-text="item.text"
            />
          </li>
        </v-col>
      </v-row>

      <v-divider class="mt-5 mb-5" />

      <p
        class="subtitle-1"
      >
        Copyright &copy; {{ new Date().getFullYear() }} Discord.js Japan All rights reserved.
      </p>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

export interface CategoryItem {
  text: string,
  url: string,
  nuxtLink?: boolean
}

export interface Category {
  title: string,
  items: CategoryItem[]
}

@Component
export default class extends Vue {
  public readonly categorys: Category[] = [
    {
      title: 'Discord.js の関連リンク',
      items: [
        {
          text: 'ドキュメント',
          url: 'https://discord.js.org/#/docs/main/stable/general/welcome'
        },
        {
          text: 'ガイド',
          url: 'https://discordjs.guide'
        },
        {
          text: 'Discord',
          url: 'https://discord.gg/bRCvFy9'
        },
        {
          text: 'GitHub',
          url: 'https://github.com/discordjs/discord.js'
        }
      ]
    },
    {
      title: 'Discord.js Japan の関連リンク',
      items: [
        {
          text: 'Scrapbox',
          url: 'https://scrapbox.io/discordjs-japan'
        },
        {
          text: 'Discord',
          url: 'https://discord.gg/4tpD3TY'
        },
        {
          text: 'GitHub',
          url: 'https://github.com/discordjs-japan'
        },
        {
          text: 'ガイド翻訳 (GitHub)',
          url: 'https://github.com/discordjs-japan/guide'
        },
        {
          text: 'ドキュメント翻訳 (Crowdin)',
          url: 'https://crowdin.com/project/discordjs'
        },
        {
          text: 'ドキュメント',
          url: 'https://i18n.djs-jpn.tk'
        },
        {
          text: 'ガイド',
          url: 'https://guide.discordjs-japan.org'
        }
      ]
    }
  ]
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
