import { Community } from '~/components/home/DiscordServer'
import { Hero } from '~/components/home/Hero'
import { Scrapbox } from '~/components/home/Scrapbox'
import { MainLayout } from '~/components/layout/MainLayout'

export default function () {
  return (
    <MainLayout>
      <Hero />
      <Community />
      <Scrapbox />
    </MainLayout>
  )
}
