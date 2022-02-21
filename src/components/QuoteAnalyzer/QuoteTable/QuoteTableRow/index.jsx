import React from 'react'
import PropTypes from 'prop-types'

function QuoteTableRowPrices(props) {

}

function QuoteTableRow(props) {
  const { data } = props

  return (
    <tr>
      <td>{data['Location']}</td>
      <td>{data['PartNo']}</td>
      <td>{data['Product']}</td>
      <td>{data['Weight'].toLocaleString("en-US")}</td>
      { data['Quotes'].map((quote) => {
        return <td>{quote['FinalPrice'].toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
      })}
      {/* <QuoteTableRowPrices /> */}
    </tr>
  )
}

QuoteTableRow.propTypes = {}

export default QuoteTableRow
