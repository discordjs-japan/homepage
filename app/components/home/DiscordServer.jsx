import { Button } from '../Button'
import { DiscordLike } from '../DiscordLike'
import { Window } from '../Window'

export const Community = () => {
  return (
    <section className="container grid grid-cols-2 gap-8 py-28">
      <div className="col-span-2 lg:col-span-1">
        <h2 className="text-4xl font-extrabold tracking-tight text-blue-500">
          Discord
        </h2>
        <p className="mt-8 text-lg font-semibold">
          1000人を超えるメンバーが参加しており、Discord.jsに関する質問を受け付けることができるように複数のチャンネルが用意されています。
        </p>
        <p className="mt-6 text-lg font-semibold">
          Scrapboxの更新情報をDiscordで受け取ることも可能ですので、Discord.jsに少しでも興味があるのでしたら参加しておいて損はありません!
        </p>
        <div className="mt-6 flex">
          <Button href="https://discord.gg/4tpD3TY" as="a">
            Discordに参加
          </Button>
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-center lg:col-span-1">
        <Window className="shadow-xl shadow-black">
          <ol className="flex w-full flex-col space-y-4 bg-slate-700 p-4">
            <li>
              <DiscordLike.Message discriminator="1" username="名無し1号">
                サーバーにテキストチャンネルを作成したいのですがどうしたらいいですか？
              </DiscordLike.Message>
            </li>
            <li>
              <DiscordLike.Message discriminator="2" username="名無し2号">
                特定のリアクションに応じて特定のプログラムを実行させたいですのですが、どうすればいいでしょうか？
              </DiscordLike.Message>
            </li>
            <li>
              <DiscordLike.Message discriminator="3" username="名無し3号">
                WebhookをDiscord.jsで操作したい
              </DiscordLike.Message>
            </li>
          </ol>
        </Window>
      </div>
    </section>
  )
}
