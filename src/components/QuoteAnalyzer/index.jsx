import React from 'react'
import PropTypes from 'prop-types'
import QuoteTable from './QuoteTable'

function QuoteAnalyzer(props) {

  return (
    // Totals
    // Dropdown
    // Table
    <QuoteTable data={props.data} />
  )
}

QuoteAnalyzer.propTypes = {}

export default QuoteAnalyzer
