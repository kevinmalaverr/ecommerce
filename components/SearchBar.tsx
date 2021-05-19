const SearchDropDown = ({ show, list, search }) => {
  if (!show || !search) {
    return <ul className="absolute"></ul>
  }
  return (
    <ul className="absolute top-10 left-0 bg-white w-full rounded-xl px-4 py-2 shadow">
      {list.length ? list.map((el) => <li>{el.name}</li>) : <li>Buscar &quot;{search}&quot;</li>}
    </ul>
  )
}

const SearchBar = ({}) => {
  rea
}

export default SearchDropDown
