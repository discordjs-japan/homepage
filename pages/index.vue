<template>
  <div id="index">
    <v-parallax
      src="images/parallax.png"
      alt="コーディングの写真"
    >
      <v-container>
        <h1 class="display-2">
          Discord.js Japan User Group
        </h1>
        <h2 class="headline grey--text text--lighten-4">
          Discord.js日本ユーザーグループ
        </h2>
      </v-container>
    </v-parallax>

    <section id="about-discordjs-japan">
      <v-container class="text-center mt-12">
        <h2 class="display-1">
          Discord.js日本ユーザーグループ とは？
        </h2>

        <v-divider class="mb-5 mt-3" />

        <v-responsive max-width="650" class="mx-auto title font-weight-light">
          <p>
            Discord.jsを使う日本ユーザーの人たちに向けて作られた非公式コミュニティです。公式ドキュメントやガイドの翻訳、Discord.jsに関する情報をScrapboxにまとめるなどの活動を主にしています。Discord.jsについて何か質問や困っていることがあれば、ぜひこのコミュニティを活用してください！あなたのいい手助けになると思います。
          </p>
        </v-responsive>
      </v-container>
    </section>

    <v-container>
      <v-row no-gutters>
        <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
          <LazyCard :card-info="card" max-width="500" class="pa-1" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { LazyCardInfo } from '~/components/ui/LazyCard.vue'

const LazyCard = () => import('@/components/ui/LazyCard.vue')

const lazyCards: LazyCardInfo[] = [
  {
    title: 'Discord.js日本ユーザーの為のDiscordサーバー',
    description:
      '主にここが活動場所です。Discord.jsに関して助けを求めることができるサーバーであり、Discord.jsに関する情報を素早くキャッチできます。Discord.jsのフレームワークやJavaScriptのガイド、ドキュメントの場所も紹介されているので覗いてみては？',
    actions: [
      {
        buttonText: '招待リンクを開く',
        href: 'https://discord.gg/4tpD3TY',
        color: 'blue'
      }
    ]
  },
  {
    title: '役立つ情報がいっぱいあるScrapbox',
    description:
      '質問に対する詳しい情報や、逆引き集があります。それ以外にもJavaScriptのことについて詳しい説明があったりするので、何か困っているときにScrapboxで探すと答えが見つかるかも！Discord.js Japanの組織メンバーによって編集・管理されています。',
    actions: [
      {
        buttonText: 'ページを開く',
        href: 'https://scrapbox.io/discordjs-japan/',
        color: 'blue'
      }
    ]
  },
  {
    title: 'ドキュメントのガイド翻訳やドキュメント国際化',
    description:
      'Discord.js Japanでは公式のDiscord.jsガイドの翻訳や、ドキュメントの翻訳を進めています。まだまだ不十分であり人も足りません。ガイドはGitHubにPR制、ドキュメントはCrowdinを使用しています。翻訳者募集中！',
    actions: [
      {
        buttonText: '詳しく',
        href: '/i18n',
        color: 'blue',
        nuxtLink: true
      }
    ]
  }
]

@Component({
  components: {
    LazyCard
  }
})
export default class extends Vue {
  public readonly cards: LazyCardInfo[] = lazyCards;
}
</script>
