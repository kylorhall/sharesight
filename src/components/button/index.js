/* eslint-disable no-mixed-operators */ // I actually like mixed operators in this scenario..
import styled from 'styled-components'
import { colors } from 'styles'

export default styled.button`
  padding: 10px;
  color: white;
  background: ${(props) => props.color && colors[props.color] || 'transparent'};

  text-transform: lowercase;
  font-variant: small-caps;
  font-weight: 500;
  font-size: 1.1rem;

  cursor: pointer;
  transition: 250ms;

  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;

  &,
  &:hover, &:focus, &:active {
    outline: none;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 -3.25em 0 0 ${props => props.color === 'black' ? 'rgba(255, 255, 255, .17)' : 'rgba(0, 0, 0, .17)'};
  }

`
