import React, { useState, useEffect } from "react"

const BitcoinIndex = ({ currency="AUD" }) => {
  let [price, setPrice] = useState() //if we just change the price variable directly, React wouldnt detect that the value was changed, therefore a re-render wouldnt be applied

  // Only triggers on mount
  useEffect(() => { 
  //useEffect is used to call functions each time a component is mounted and a render occurs, ie. once the component is first rendered, and any time useState or any 'Updating' props are used or a component is changed.
    fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json()) // remember that we use .then when passing through a promise. in this case, response from fetch is parsed to create another promise 
      .then((data) => setPrice(data.bpi[currency].rate))

    // called on unmount
    // return () => {
    //   // cleanup code
    // }
  }, [currency]) //we pass the currency within the useEffect so that if it changes, useEffect is triggered again, the fetch occurs again and it is rerendered.

  useEffect(() => console.log("effect triggered on mount or any change"))

  useEffect(() => console.log("effect triggered on mount or price change"), [price])

  return (
    <>
      <h1>Bitcoin Index</h1>
      {price ? <p>Current Price ({currency}): {price}</p> : <p>Loading ...</p>}
    </>
  )
}

export default BitcoinIndex
