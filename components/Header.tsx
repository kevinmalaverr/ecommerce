import React, { useRef, useState } from 'react'
import Link from 'next/link'
import s from '../styles/components/Header.module.css'
import ActiveLink from './ActiveLink'
import { useStore } from 'context/Store'
import SearchDropDown from './SearchBar'

// icons
import IconSearch from '@/icons/search'
import IconCart from '@/icons/cart'
import IconMenu from '@/icons/menu'

const Header = (): JSX.Element => {
  const searchbar = useRef()
  const [showList, setShowList] = useState(false)
  const [coincidences, setCoincidences] = useState([])
  const {
    state: { cart, searchList },
  } = useStore()

  const change = () => {
    const search = searchbar.current.value
    if (search.length < 1) return setCoincidences([])
    const regex = new RegExp(search, 'i')
    const tempCoincidences = []

    let i = 0
    while (i < searchList.length) {
      const test = regex.test(searchList[i].name)
      if (test) tempCoincidences.push(searchList[i])
      i++
    }

    setCoincidences(tempCoincidences)
  }

  return (
    <header className={`p-4 ${s.header}`}>
      <button className={`${s.menu} text-lg`}>
        <IconMenu />
      </button>
      <ActiveLink href="/">
        <a className={s.title}>
          <b className="text-lg leading-none">Muebles Willys</b>
        </a>
      </ActiveLink>
      <ul className={s.itemList}>
        <li>
          <ActiveLink href="/">
            <a>Muebles</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contacto">
            <a>Contacto</a>
          </ActiveLink>
        </li>
      </ul>
      <form className={`${s.searchbar} relative`}>
        <input
          type="text"
          placeholder="Buscar"
          ref={searchbar}
          onChange={change}
          // onBlur={() => setShowList(false)}
          onFocus={() => setShowList(true)}
        />
        <IconSearch />
        <SearchDropDown show={showList} list={coincidences} search={searchbar.current?.value} />
      </form>

      <Link href="/cart">
        <a className={`${s.cart} text-lg`}>
          <IconCart />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </a>
      </Link>
    </header>
  )
}

export default Header
