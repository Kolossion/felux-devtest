import './QuoteTableHeader.css'
import React from 'react'
import PropTypes from 'prop-types'

function QuoteTableHeader(props) {
  return (
    <thead className='quoteTableHeader'>
      <tr>
        <th>Location</th>
        <th>Part #</th>
        <th>Steel Product</th>
        <th>Weight</th>
        { props.companies.map((company) => (
          <th key={company}>{ company }</th>
        ))}
      </tr>
    </thead>
  )
}

QuoteTableHeader.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.string)
}

export default QuoteTableHeader
