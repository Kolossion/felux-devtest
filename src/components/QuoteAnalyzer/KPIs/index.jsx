import './KPIs.css'
import React from 'react'
import PropTypes from 'prop-types'
import KPIDataPoint from './KPIDataPoint'
import { toUSD } from '../../../lib/helpers'
import sum from 'lodash-es/sum'

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

    return toUSD(priceTotal)
  }
  const getAvgPricePerCWT = () => {
    const totalWeight = selectedQuotes.reduce((prev, cur) => prev + cur.weight, 0.0)
    const weightedSums = selectedQuotes.map((quote) => (quote.weight / totalWeight) * quote.quote['FinalPrice'] )
    return toUSD(sum(weightedSums))
  }

  return (
    <div className="kpiContainer">
      <KPIDataPoint title="Total Weight" value={getTotalWeight()} />
      <KPIDataPoint title="Invoice" value={getTotalPrice()} />
      <KPIDataPoint title="Avg $/CWT" value={getAvgPricePerCWT()} />
    </div>
  )
}

KPIs.propTypes = {
  selectedQuotes: PropTypes.arrayOf(PropTypes.object)
}

export default KPIs
