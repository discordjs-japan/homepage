import { Button } from '../Button'
import { Window } from '../Window'

export const Scrapbox = () => {
  return (
    <section className="container grid grid-cols-2 gap-8 py-28">
      <div className="col-span-2 lg:col-span-1">
        <h2 className="text-4xl font-extrabold tracking-tight text-green-500">
          Scrapbox
        </h2>
        <p className="mt-8 text-lg font-semibold">
          Discord.js Japan User
          GroupではScrapboxを活用してDiscord.jsに関する様々な情報をまとめています。
        </p>
        <p className="mt-6 text-lg font-semibold">
          Discordサーバーに参加して<code className="mx-1">InkoHX#7777</code>
          に参加するとメンションしてくれれば誰でもページを更新、作成することができます！
        </p>
        <div className="mt-6 flex">
          <Button
            variant="green"
            href="https://scrapbox.io/discordjs-japan"
            as="a"
          >
            Scrapboxを見てみる
          </Button>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <Window className="shadow-lg shadow-black">
          <img src="/home/scrapbox.png" alt="Scrapbox" />
        </Window>
      </div>
    </section>
  )
}
