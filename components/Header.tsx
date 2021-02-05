import React from 'react'
import s from '../styles/components/Header.module.css'
import ActiveLink from './ActiveLink'

// icons
import IconSearch from '@/icons/search'
import IconCart from '@/icons/cart'
import IconMenu from '@/icons/menu'

const Header = (): JSX.Element => {
  return (
    <header className={`p-4 ${s.header}`}>
      <button className={`${s.menu} text-lg`}>
        <IconMenu />
      </button>
      <ActiveLink href="/">
        <a className={s.title}>
          <b className="text-lg leading-none">Muebles Willys.</b>
        </a>
      </ActiveLink>
      <ul className={s.itemList}>
        <li>
          <ActiveLink href="/">
            <a>Muebles</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/custom">
            <a>A la medida</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contacto">
            <a>Contacto</a>
          </ActiveLink>
        </li>
      </ul>
      <form className={`${s.searchbar}`}>
        <input type="text" placeholder="Buscar" />
        <IconSearch />
      </form>
      <button className={`${s.cart} text-lg`}>
        <IconCart />
      </button>
    </header>
  )
}

export default Header
