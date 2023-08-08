import { useEffect, useState } from "react"

const CurrencySelector = ({ currency, setCurrency }) => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetch('https://justcors.com/tl_763c4ef/https://api.coindesk.com/v1/bpi/supported-currencies.json')
      .then(res => res.json())
      .then(data => setCurrencies(data))
  }, [])

  return (
    <select onChange={evt => setCurrency(evt.target.value)} value={currency}>
      {currencies.map(cur => <option value={cur.currency}>{cur.country}</option>)}
    </select>
  )
}

export default CurrencySelector