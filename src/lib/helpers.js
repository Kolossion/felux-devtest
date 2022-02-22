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
  return quoteVal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}

export const isQuoteSelected = (quote, selectedQuotes) => {
  if (Array.isArray(selectedQuotes) && selectedQuotes.length == 0) return false

  console.log("************")
  console.log("SELECTED QUOTES", selectedQuotes)
  console.log("QUOTE", quote)
  console.log("FOUND INDEX?", findIndex(selectedQuotes, quote))
  return findIndex(selectedQuotes, quote) >= 0
}