import React from 'react'
import PropTypes from 'prop-types'
import { getQuoteCompanies } from '../../../lib/helpers';
import QuoteTableHeader from './QuoteTableHeader';
import QuoteTableRow from './QuoteTableRow';

function QuoteTable(props) {

  return (
    <table>
      <QuoteTableHeader companies={getQuoteCompanies(props.data)} />
      <tbody>
        { props.data.map((row) => {
          return <QuoteTableRow data={row} />
        })}
      </tbody>
    </table>
  )
}

QuoteTable.propTypes = {}

export default QuoteTable
