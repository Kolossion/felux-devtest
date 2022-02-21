import React from 'react'
import PropTypes from 'prop-types'

function QuoteTableHeader(props) {
  return (
    <thead>
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

QuoteTableHeader.propTypes = {}

export default QuoteTableHeader
