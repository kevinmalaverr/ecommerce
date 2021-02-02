import React from 'react'
import s from '../styles/components/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={`p-4 ${s.header}`}>
      <button className={s.menu}>x</button>
      <Link href='/'>
        <a className={s.title}><b>Furniture</b></a>
      </Link>
      <ul className={s.itemList}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <div className={s.searchbar}>
        <input type="text"/>
      </div>
      <button className={s.cart}>c</button>
    </header>
  )
}

export default Header
