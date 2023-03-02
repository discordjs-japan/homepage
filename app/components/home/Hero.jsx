import { Window } from '../Window'
import * as Discord from '../Discord'

export const Hero = () => {
  return (
    <div className="container grid grid-cols-2 gap-8 py-28">
      <div className="col-span-2 lg:col-span-1">
        <h1 className="text-7xl font-black leading-tight tracking-tight text-black">
          Discord.js Japan User Group
        </h1>
        <p className="mt-12 text-lg font-semibold leading-relaxed tracking-wide">
          Discord APIライブラリの一つである「
          <bold className="font-semibold text-black">Discord.js</bold>
          」の非公式日本語コミュニティ
        </p>
        <p className="mt-6 text-lg font-semibold leading-relaxed tracking-wide">
          Discord.jsの情報をScrapboxにまとめていたり、ドキュメントやガイドの翻訳などあなたのボット開発を支えるための活動を多くのメンバーたちと共に行っている組織でもあります。
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-center lg:col-span-1">
        <Window className="shadow-xl shadow-black">
          <ol className="flex w-full flex-col space-y-4 bg-slate-700 p-4">
            <li>
              <Discord.Message discriminator="1" username="名無し1号">
                <strong className="text-white">
                  Discord.jsを扱う日本のユーザーのためのコミュニティ
                </strong>
                を名乗っていますが、実は公式と関わりがほとんどありません (´·ω·`)
              </Discord.Message>
            </li>
            <li>
              <Discord.Message discriminator="2" username="名無し2号">
                公式サイト:{' '}
                <a
                  href="https://discord.js.org"
                  className="text-blue-500 hover:underline"
                >
                  https://discord.js.org
                </a>
                <br />
                公式ガイド:{' '}
                <a
                  href="https://discordjs.guide"
                  className="text-blue-500 hover:underline"
                >
                  https://discordjs.guide
                </a>
                <br />
                公式サーバー:{' '}
                <a
                  href="https://discord.gg/djs"
                  className="text-blue-500 hover:underline"
                >
                  https://discord.gg/djs
                </a>
              </Discord.Message>
            </li>
            <li>
              <Discord.Message discriminator="3" username="名無し3号">
                ⬆️もよろしくね～
              </Discord.Message>
            </li>
          </ol>
        </Window>
      </div>
    </div>
  )
}
