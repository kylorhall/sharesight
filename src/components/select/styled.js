import styled from 'styled-components'
import { colors } from 'styles'

export const Select = styled.select`
  color: ${props => props.value ? colors.black : colors.grey};

  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  background-color: ${colors.background.white};
  border-color: ${colors.border.grey};
  cursor: pointer;
  display: block;
  font-size: 1em;
  min-width: 200px;
  max-width: 100%;
  outline: none;
  padding-right: 2.5em;
  position: relative;
  text-align: left;

  &:focus,
  &:active {
    outline: none;
    border-color: ${colors.border.grey};
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: ${colors.background.white};
    border-color: ${colors.border.white};
    box-shadow: none;
    color: ${colors.grey};

    &:hover {
      border-color: ${colors.border.white};
    }
  }

  &:hover {
    border-color: ${colors.border.grey};
  }
`

export const Wrapper = styled.div`
  display: inline-block;
  height: 4.25em; // 2.25em + 2em
  max-width: 100%;
  position: relative;
  vertical-align: top;
  margin: 16px;

  &:after {
    border: 2px solid ${colors.purple};
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.5em;
    pointer-events: none;
    position: absolute;
    transform: rotate(-45deg);
    width: 0.5em;
    right: 1.125em;
    top: 2.125em; // Wrapper.height / 2 (doesn't account for :after.height, but it looks good as is)
    z-index: 4;
  }

  &:hover select:after {
    border-color: ${colors.black};
  }
`

export const Label = styled.div`
  text-align: left;
  height: 1.5em;
  color: ${props => props.disabled ? colors.grey : colors.black};
  font-weight: 300;
  padding: 0 0 0 10px;
`
