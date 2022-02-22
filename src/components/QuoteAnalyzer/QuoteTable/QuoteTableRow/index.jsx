import React, { useEffect, useState } from 'react'
import { getFormattedQuotePrice } from '../../../../lib/helpers'
import PropTypes from 'prop-types'

function QuoteTableRowPrices(props) {
  const { quotes, selectedPriceType } = props
  const [maxPrice, setMaxPrice] = useState(-1)
  const [minPrice, setMinPrice] = useState(Math.max)

  useEffect(() => {
    const prices = quotes.map((quote) => ( quote[selectedPriceType] ))

    prices.forEach((price, i) => {
      if (price > maxPrice) {
        setMaxPrice(price)
      } else if (price < minPrice) {
        setMinPrice(price)
      }
    });

  }, [props.selectedPriceType])  

  return (
    <>
      { quotes.map((quote) => {
          return (
            <td>
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
      {/* { data['Quotes'].map((quote) => {
        return <td>{quote['FinalPrice'].toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
      })} */}
      <QuoteTableRowPrices selectedPriceType={props.selectedPriceType} quotes={data['Quotes']} />
    </tr>
  )
}

QuoteTableRow.propTypes = {}

export default QuoteTableRow
