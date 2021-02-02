
import { useContext} from 'react'
import AppContext from '../context/AppContext'

const cart = () => {
  const {state: {cart}} = useContext(AppContext)
  return (
    <div>
      {cart.map(item=>(
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  )
}

export default cart
