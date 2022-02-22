import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuoteTable from './QuoteTable'
import PriceViewSelector from './PriceViewSelector'

function QuoteAnalyzer(props) {
  const [selectedPriceType, setSelectedPriceType] = useState('FinalPrice')

  return (
      // Totals
      // Dropdown
    <div>
      <PriceViewSelector value={selectedPriceType} onChange={(e)=>{setSelectedPriceType(e.target.value)}} />
      <QuoteTable data={props.data} selectedPriceType={selectedPriceType} />
    </div>
  )
}

QuoteAnalyzer.propTypes = {}

export default QuoteAnalyzer
