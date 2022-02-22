// NOTE: These functions assume the data structure from the provided JSON
//       example. Would need refactoring to handle other structures.
import findIndex from 'lodash-es/findIndex';
import flatten from 'lodash-es/flatten';
import uniq from 'lodash-es/uniq'


export const getQuoteCompanies = (data) => {
  const quotesOnly = flatten(data.map((dataPoint) => dataPoint['Quotes']))
  const names = uniq(quotesOnly.map((quote) => quote['Company']))
  return names
}

export const getFormattedQuotePrice = (quote, key) => {
  const quoteVal = quote[key]
  return toUSD(quoteVal)
}

export const isQuoteSelected = (quote, selectedQuotes) => {
  if (Array.isArray(selectedQuotes) && selectedQuotes.length === 0) return false
  return findIndex(selectedQuotes, quote) >= 0
}

export const toUSD = (val) => {
  return val.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}