<template>
  <v-lazy>
    <v-card
      :max-width="maxWidth"
      :max-height="maxHeight"
      :width="width"
      :height="height"
    >
      <v-card-title>
        <h3 v-text="cardInfo.title" />
      </v-card-title>

      <v-card-text>
        <p v-text="cardInfo.description" />
      </v-card-text>

      <v-divider class="mt-1 mb-1" />

      <v-card-actions v-for="(action, index) in cardInfo.actions" :key="index">
        <v-btn :href="action.href" :color="action.color" :nuxt="action.nuxtLink" v-text="action.buttonText" />
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface LazyCardActions {
  buttonText: string,
  href: string,
  color?: string,
  nuxtLink?: boolean
}

export interface LazyCardInfo {
  title: string,
  description: string,
  actions?: LazyCardActions[]
}

@Component
export default class extends Vue {
  @Prop({ required: true })
  public readonly cardInfo!: LazyCardInfo

  @Prop()
  public readonly maxWidth?: number

  @Prop()
  public readonly maxHeight?: number

  @Prop()
  public readonly width?: number

  @Prop()
  public readonly height?: number
}
</script>
