import React from 'react'
import PropTypes from 'prop-types'
import SelectComponent from 'components/select'

const FoodComponent = (props) => {
  const options = [
    // this could definitely be done better, fuzzy search, nlp, autocomplete, etc...
    'bacon', 'beef', 'bread', 'burger', 'cake', 'cheddar', 'cheesecake', 'chicken', 'chilli', 'chocolate', 'crab', 'curry',
    'fish', 'fruit', 'lamb', 'pie', 'pork', 'salad', 'salmon', 'sashimi', 'soup', 'steak', 'stew', 'sushi', 'tacos', 'tart'
  ]

  return <SelectComponent
    options={options}
    label='Eating'
    placeholder='What are you eating?'
    value={props.value}
    callback={props.callback}
    {...props}
  />
}

FoodComponent.propTypes = {
  value: PropTypes.any,
  callback: PropTypes.func.isRequired
}

export default FoodComponent
