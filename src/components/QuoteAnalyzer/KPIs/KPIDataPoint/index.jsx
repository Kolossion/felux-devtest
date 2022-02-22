import './KPIDataPoint.css'
import React from 'react'
import PropTypes from 'prop-types'

function KPIDataPoint(props) {
  return (
    <div className="kpiDataPoint">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  )
}

KPIDataPoint.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any
}

export default KPIDataPoint
