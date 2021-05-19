import { useRef, useState } from 'react'

export function useSearch(searchList) {
  const [coincidences, setCoincidences] = useState([])
  const ref = useRef()

  function exec() {}

  return [exec, ref]
}
