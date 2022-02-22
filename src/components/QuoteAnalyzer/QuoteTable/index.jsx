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
        {props.data.map((row) => {
          return (
            <QuoteTableRow 
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

QuoteTable.propTypes = {}

export default QuoteTable
