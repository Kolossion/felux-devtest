// NOTE: These functions assume the data structure from the provided JSON
//       example. Would need refactoring to handle other structures.
import flatten from 'lodash-es/flatten';
import uniq from 'lodash-es/uniq'


export const getQuoteCompanies = (data) => {
  const quotesOnly = flatten(data.map((dataPoint) => dataPoint['Quotes']))
  const names = uniq(quotesOnly.map((quote) => quote['Company']))
  return names
}

export const getFormattedQuotePrice = (quote, key) => {
  const quoteVal = quote[key]
  return quoteVal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}