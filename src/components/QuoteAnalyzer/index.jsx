import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuoteTable from './QuoteTable'
import PriceViewSelector from './PriceViewSelector'
import findIndex from 'lodash-es/findIndex'
import filter from 'lodash-es/filter'
import KPIs from './KPIs'

function QuoteAnalyzer(props) {
  const [selectedPriceType, setSelectedPriceType] = useState('FinalPrice')
  const [selectedQuotes, setSelectedQuotes] = useState([])

  const toggleSelectedQuote = (partNo, weight, quote) => {
    const quoteObj = { partNo, weight, quote }
    console.log("QUOTEOBJ", quoteObj)

    const idxInList = findIndex(selectedQuotes, quoteObj)
    const alreadySelected = idxInList >= 0
    console.log("ALREADY SELECTED?", alreadySelected)
    let newList = selectedQuotes

    if (alreadySelected) {
      console.log("SELECTED. REMOVING.")
      newList.splice(idxInList, 1)
    } else {
      console.log("NOT SELECTED. ADDING.")
      newList = [...selectedQuotes, quoteObj]
    }
    console.log("NEW LIST", newList)

    setSelectedQuotes([...newList])
  }


  return (
    // Totals
    // Dropdown
    <div>
      <div>
        {selectedQuotes.toString()}
      </div>
      <KPIs 
        selectedQuotes={selectedQuotes}
      />
      <PriceViewSelector
        value={selectedPriceType}
        onChange={(e) => { setSelectedPriceType(e.target.value) }}
      />
      <QuoteTable
        data={props.data}
        selectedPriceType={selectedPriceType}
        onClickQuote={toggleSelectedQuote}
      />
    </div>
  )
}

QuoteAnalyzer.propTypes = {}

export default QuoteAnalyzer
