import React, { useState } from 'react'
import PropTypes from 'prop-types'
import QuoteTable from './QuoteTable'
import PriceViewSelector from './PriceViewSelector'
import findIndex from 'lodash-es/findIndex'
import KPIs from './KPIs'

function QuoteAnalyzer(props) {
  const [selectedPriceType, setSelectedPriceType] = useState('FinalPrice')
  const [selectedQuotes, setSelectedQuotes] = useState([])

  const onClickQuote = (partNo, weight, quote) => {
    const quoteObj = { partNo, weight, quote }
    let newList = [...selectedQuotes]

    console.log("QUOTEOBJ", quoteObj)

    const idxInList = findIndex(selectedQuotes, (quote) => quote.partNo === partNo)
    const partNumberMatch = idxInList >= 0

    if (partNumberMatch) {
      if (JSON.stringify(newList[idxInList]) === JSON.stringify(quoteObj)) {
        newList.splice(idxInList, 1)
      } else {
        newList[idxInList] = quoteObj
      }
    } else {
      newList = [...selectedQuotes, quoteObj]
    }

    setSelectedQuotes(newList)
  }


  return (
    <div>
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
        selectedQuotes={selectedQuotes}
        onClickQuote={onClickQuote}
      />
    </div>
  )
}

QuoteAnalyzer.propTypes = {}

export default QuoteAnalyzer
