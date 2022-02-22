import React, { useMemo } from 'react'
import { getFormattedQuotePrice, isQuoteSelected } from '../../../../lib/helpers'
import PropTypes from 'prop-types'

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
      styles = { ...styles, backgroundColor: '#DB302A', color: 'white' }
    } else if (quote[selectedPriceType] === quotePrices[0]) {
      styles = { ...styles, backgroundColor: '#3CCF6F' }
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

function QuoteTableRow(props) {
  const { data } = props

  return (
    <tr className="quoteRow">
      <td>{data['Location']}</td>
      <td>{data['PartNo']}</td>
      <td>{data['Product']}</td>
      <td>{data['Weight'].toLocaleString("en-US")}</td>
      <QuoteTableRowPrices
        onClickQuote={props.onClickQuote}
        selectedPriceType={props.selectedPriceType}
        selectedQuotes={props.selectedQuotes}
        data={data}
      />
    </tr>
  )
}

QuoteTableRow.propTypes = {}

export default QuoteTableRow
