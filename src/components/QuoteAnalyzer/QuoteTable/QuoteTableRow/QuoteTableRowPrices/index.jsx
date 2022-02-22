import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { getFormattedQuotePrice, isQuoteSelected } from '../../../../../lib/helpers'

function QuoteTableRowPrices(props) {
  const { data, selectedPriceType, selectedQuotes } = props
  const quotes = data['Quotes']

  const quotePrices = useMemo(() => {
    const prices = quotes.map((quote) => quote[selectedPriceType])
    prices.sort()
    return prices
  }, [quotes, selectedPriceType])

  const getCellStyle = (quote) => {
    let styles = { cursor: 'pointer' }

    if (quote[selectedPriceType] === quotePrices[quotePrices.length - 1]) {
      styles = { ...styles, backgroundColor: '#C2362D', color: 'white' }
    } else if (quote[selectedPriceType] === quotePrices[0]) {
      styles = { ...styles, backgroundColor: '#38C771' }
    }

    return styles
  }

  const clickQuote = (partNo, weight, quote) => () => {
    if (props.onClickQuote) {
      props.onClickQuote(partNo, weight, quote)
    }
  }

  return (
    <>
      {quotes.map((quote, i) => {
        return (
          <td
            key={`${quote[selectedPriceType]}-${quote['Company']}-${i}`}
            style={getCellStyle(quote)}
            onClick={clickQuote(data['PartNo'], data['Weight'], quote)}
          >
            {
              getFormattedQuotePrice(quote, selectedPriceType)
            }
            {isQuoteSelected({ quote, partNo: data['PartNo'], weight: data['Weight'] }, selectedQuotes) ? '*' : ''}
          </td>
        )
      })
      }
    </>
  )
}

QuoteTableRowPrices.propTypes = {
  data: PropTypes.object,
  selectedPriceType: PropTypes.string,
  selectedQuotes: PropTypes.arrayOf(PropTypes.object)
}

export default QuoteTableRowPrices