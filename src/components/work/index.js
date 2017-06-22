import React from 'react'
import PropTypes from 'prop-types'
import SelectComponent from 'components/select'

const WorkComponent = (props) => {
  const options = [
    'Taxes', 'Researching', 'Buying', 'Selling', 'Calculating Profit', 'Calculating Loss', 'Calling Someone', 'Not Sure'
  ]

  return <SelectComponent
    options={options}
    label='Working On'
    placeholder='What are you working on?'
    value={props.value}
    callback={props.callback}
    {...props}
  />
}

WorkComponent.propTypes = {
  value: PropTypes.any,
  callback: PropTypes.func.isRequired
}

export default WorkComponent
