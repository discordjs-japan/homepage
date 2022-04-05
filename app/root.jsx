import styles from './styles/tailwind.css'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Discord.js Japan User Group',
    description:
      '日本のDiscord.jsユーザーを対象としたコミュニティを運営している組織',
    viewport: 'width=device-width,initial-scale=1',
  }
}
export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="text-slate-600 antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
