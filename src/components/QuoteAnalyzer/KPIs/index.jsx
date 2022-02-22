import React from 'react'
import PropTypes from 'prop-types'

function KPIs(props) {
  const { selectedQuotes } = props

  const getTotalWeight = () => {
    const weightTotal = selectedQuotes.reduce((prev, cur) => prev + cur.weight, 0.0)
    return weightTotal.toLocaleString("en-US")
  }
  const getTotalPrice = () => {
    const priceTotal = selectedQuotes.reduce(
      (prev, cur) => prev + ((cur.weight / 100) * cur.quote['FinalPrice']),
      0.0
    )

    return priceTotal.toLocaleString("en-US", { style: 'currency', currency: 'USD' })
  }
  const getAvgPricePerCWT = () => { }

  return (
    <div>
      <p>Total Weight (lbs.): {getTotalWeight()} lbs.</p>
      <p>Invoice: {getTotalPrice()}</p>
      <p>Avg $/CWT: {getAvgPricePerCWT()}</p>
    </div>
  )
}

KPIs.propTypes = {}

export default KPIs
