import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from '@remix-run/react'

export const NavBar = () => {
  return (
    <header className="container sticky top-0 flex items-center justify-between bg-white bg-opacity-95 py-4">
      <Link
        to="/"
        className="cursor-pointer text-xl font-bold uppercase text-red-600 transition-opacity hover:opacity-70"
      >
        D.js Japan
      </Link>
      <div className="flex items-center space-x-4 text-black">
        <a
          href="https://discord.gg/4tpD3TY"
          className="transition-opacity hover:opacity-60"
        >
          <FontAwesomeIcon icon={faDiscord} className="h-7 w-7" />
        </a>
        <a
          href="https://github.com/discordjs-japan"
          className="transition-opacity hover:opacity-60"
        >
          <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
        </a>
        <a
          href="https://scrapbox.io/discordjs-japan"
          className="transition-opacity hover:opacity-60"
        >
          <img
            src="https://nota.github.io/press-kit/S-icon.svg"
            className="h-7 w-7 brightness-75 grayscale"
            alt="Scrapbox"
          />
        </a>
      </div>
    </header>
  )
}
