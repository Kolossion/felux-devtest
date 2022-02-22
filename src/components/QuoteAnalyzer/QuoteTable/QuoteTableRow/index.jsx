import React, { useEffect, useMemo, useState } from 'react'
import { getFormattedQuotePrice } from '../../../../lib/helpers'
import PropTypes from 'prop-types'

function QuoteTableRowPrices(props) {
  const { data, selectedPriceType } = props
  const quotes = data['Quotes']

  const quotePrices = useMemo(() => {
    const prices = quotes.map((quote) => quote[selectedPriceType])
    prices.sort()
    return prices
  }, [quotes, selectedPriceType])

  const getCellStyle = (quote) => {
    const baseStyles = { cursor: 'pointer' }

    if (quote[selectedPriceType] === quotePrices[quotePrices.length - 1]) {
      return { ...baseStyles, backgroundColor: '#DB302A', color: 'white' }
    } else if (quote[selectedPriceType] === quotePrices[0]) {
      return { ...baseStyles, backgroundColor: '#3CCF6F' }
    }

    return baseStyles
  }

  const clickQuote = (partNo, weight, quote) => () => {
    if (props.onClickQuote) {
      props.onClickQuote(partNo, weight, quote)
    }
  }

  return (
    <>
      {quotes.map((quote, i) => {
        const selected = false

        return (
          <td
            key={`${quote[selectedPriceType]}-${quote['Company']}-${i}`}
            style={getCellStyle(quote)}
            onClick={clickQuote(data['PartNo'], data['Weight'], quote)}
          >
            {getFormattedQuotePrice(quote, selectedPriceType)}
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
      <QuoteTableRowPrices onClickQuote={props.onClickQuote} selectedPriceType={props.selectedPriceType} data={data} />
    </tr>
  )
}

QuoteTableRow.propTypes = {}

export default QuoteTableRow
