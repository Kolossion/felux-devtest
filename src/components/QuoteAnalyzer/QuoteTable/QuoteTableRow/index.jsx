import React, { useEffect, useMemo, useState } from 'react'
import { getFormattedQuotePrice } from '../../../../lib/helpers'
import PropTypes from 'prop-types'

function QuoteTableRowPrices(props) {
  const { quotes, selectedPriceType } = props
  // const [maxPrice, setMaxPrice] = useState(parseFloat(-1))
  // const [minPrice, setMinPrice] = useState(parseFloat(Number.MAX_SAFE_INTEGER))

  const quotePrices = useMemo(() => {
    const prices = quotes.map((quote) => quote[selectedPriceType])
    prices.sort()
    return prices
  }, [quotes, selectedPriceType])

  const getCellStyle = (quote) => {
    if (quote[selectedPriceType] === quotePrices[quotePrices.length - 1]) {
      return { backgroundColor: '#DB302A', color: 'white' }
    } else if (quote[selectedPriceType] === quotePrices[0]) {
      return { backgroundColor: '#3CCF6F' }
    } else {
      return {}
    }
  }

  return (
    <>
      { quotes.map((quote, i) => {
          return (
            <td key={`${quote[selectedPriceType]}-${quote['Company']}-${i}`} style={getCellStyle(quote)}>
              { getFormattedQuotePrice(quote, selectedPriceType) }
            </td>
          )
        })
      }
    </>
  )
}

function QuoteTableRow(props) {
  const { data } = props

  return (
    <tr>
      <td>{data['Location']}</td>
      <td>{data['PartNo']}</td>
      <td>{data['Product']}</td>
      <td>{data['Weight'].toLocaleString("en-US")}</td>
      <QuoteTableRowPrices selectedPriceType={props.selectedPriceType} quotes={data['Quotes']} />
    </tr>
  )
}

QuoteTableRow.propTypes = {}

export default QuoteTableRow
