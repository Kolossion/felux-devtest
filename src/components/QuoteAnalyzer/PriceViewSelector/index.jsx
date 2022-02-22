import './PriceViewSelector.css'
import React from 'react'
import PropTypes from 'prop-types'

function PriceViewSelector(props) {
  const changeValue = (e) => {
    e.preventDefault()
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className='priceViewSelector'>
      <p>View Price:</p>
      <select name='price-type' id='price-type' value={props.value} onChange={changeValue}>
        <option value="FinalPrice">Final Price</option>
        <option value="PackagingFee">Packaging Fee</option>
        <option value="FreightFee">Freight Fee</option>
      </select>
    </div>
  )
}

PriceViewSelector.propTypes = {}

export default PriceViewSelector
