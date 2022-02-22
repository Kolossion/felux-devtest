import React from 'react'
import PropTypes from 'prop-types'
import QuoteTableRowPrices from './QuoteTableRowPrices'

function QuoteTableRow(props) {
  const { data } = props

  return (
    <tr className='quoteRow'>
      <td>{data['Location']}</td>
      <td>{data['PartNo']}</td>
      <td>{data['Product']}</td>
      <td>{data['Weight'].toLocaleString('en-US')}</td>
      <QuoteTableRowPrices
        onClickQuote={props.onClickQuote}
        selectedPriceType={props.selectedPriceType}
        selectedQuotes={props.selectedQuotes}
        data={data}
      />
    </tr>
  )
}

QuoteTableRow.propTypes = {
  data: PropTypes.object
}

export default QuoteTableRow
