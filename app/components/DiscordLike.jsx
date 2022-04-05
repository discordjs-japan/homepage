const Message = ({ children, username, discriminator }) => {
  return (
    <div className="flex space-x-4">
      <img
        className="block h-10 w-10 rounded-full"
        src={`https://cdn.discordapp.com/embed/avatars/${discriminator}.png`}
        alt="ユーザーアイコン"
      />
      <div>
        <div className="font-semibold tracking-wide text-white">{username}</div>
        <div className="text-slate-300">{children}</div>
      </div>
    </div>
  )
}

export const DiscordLike = {
  Message,
}
