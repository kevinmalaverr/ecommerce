import Link from 'next/link'

const SearchDropDown = ({ show, list, search }) => {
  if (!show || !search) {
    return <ul className="absolute"></ul>
  }

  return (
    <ul className="absolute top-10 left-0 bg-white w-full rounded-xl px-4 py-2 shadow">
      {list.length ? (
        list.map((el) => (
          <li key={el.id}>
            <Link href={`product/${el.id}`}>{el.name}</Link>
          </li>
        ))
      ) : (
        <li>Buscar &quot;{search}&quot;</li>
      )}
    </ul>
  )
}

export default SearchDropDown
