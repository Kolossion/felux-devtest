import './QuoteTable.css'

import React from 'react'
import PropTypes from 'prop-types'
import { getQuoteCompanies } from '../../../lib/helpers'
import QuoteTableHeader from './QuoteTableHeader'
import QuoteTableRow from './QuoteTableRow'

function QuoteTable(props) {

  return (
    <table className='quoteTable'>
      <QuoteTableHeader companies={getQuoteCompanies(props.data)} />
      <tbody>
        {props.data.map((row, i) => {
          return (
            <QuoteTableRow 
              key={`${row['PartNo']}-${i}`}
              onClickQuote={props.onClickQuote}
              selectedQuotes={props.selectedQuotes}
              data={row}
              selectedPriceType={props.selectedPriceType}
            />
          )
        })}
      </tbody>
    </table>
  )
}

QuoteTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onClickQuote: PropTypes.func,
  selectedQuotes: PropTypes.arrayOf(PropTypes.object),
  selectedPriceType: PropTypes.string
}

export default QuoteTable
