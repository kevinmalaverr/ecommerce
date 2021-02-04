import React from 'react'
import s from '../styles/components/Header.module.css'
import Link from 'next/link'

// icons
import IconSearch from './icons/search'
import IconCart from './icons/cart'
import IconMenu from './icons/menu'

const Header = () => {
  return (
    <header className={`p-4 ${s.header}`}>
      <button className={`${s.menu} text-lg`}>
        <IconMenu />
      </button>
      <Link href="/">
        <a className={s.title}>
          <b className="text-lg leading-none">Muebles Willys.</b>
        </a>
      </Link>
      <ul className={s.itemList}>
        <li>
          <Link href="/">
            <a>muebles</a>
          </Link>
        </li>
        <li>
          <Link href="/custom">
            <a>a la medida</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>contacto</a>
          </Link>
        </li>
      </ul>
      <form className={`${s.searchbar}`}>
        <input type="text" aria-label="Filter projects" placeholder="Filter projects" />
        <IconSearch />
      </form>
      <button className={`${s.cart} ${s.cartNotification} text-lg`}>
        <IconCart />
      </button>
    </header>
  )
}

export default Header
