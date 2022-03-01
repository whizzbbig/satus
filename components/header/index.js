import cn from 'clsx'
import { Navigation } from 'components/navigation'
import { useStore } from 'lib/store'
import Link from 'next/link'
import shallow from 'zustand/shallow'
import s from './header.module.scss'

export const Header = () => {
  const [navIsOpen, setNavIsOpen] = useStore(
    (state) => [state.navIsOpen, state.setNavIsOpen],
    shallow
  )

  const data = useStore((state) => state.headerData)

  return (
    <header className={s.header}>
      <Navigation />
      <div className={cn('layout-block', s.header__head)}>
        <button
          onClick={() => {
            setNavIsOpen(!navIsOpen)
          }}
        >
          menu
        </button>
        <h1>{data.title}</h1>
        <div>
          <Link href="/">
            <a>home</a>
          </Link>
          /
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </div>
      </div>
    </header>
  )
}
