import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Label, Select } from './styled'

const SelectComponent = ({ options, placeholder, label, value, callback }) => {
  return <Wrapper>
    <Label disabled={!value}>{label || ''}</Label>
    <Select onChange={e => { e.target && callback(e.target.value) }} value={value}>
      {placeholder ? <option value=''>{placeholder}</option> : null}
      {options.map(value => {
        const key = value ? value.toLowerCase().replace(' ', '_') : ''
        return <option value={key} key={`option-${key}`}>{value}</option>
      })}
    </Select>
  </Wrapper>
}

SelectComponent.propTypes = {
  value: PropTypes.any,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  callback: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
}

SelectComponent.defaultValues = {
  value: ''
}

export default SelectComponent
