import styled from 'styled-components'
import { colors } from 'styles'
import { Flex, Box } from 'styled/grid'

import ButtonComponent from 'components/button'

export const Beer = styled(Flex).attrs({
  wrap: false,
  align: 'center',
  justify: 'center',
  p: 2
})`
  min-width: 100%;
`

export const ImageWrapper = styled(Box).attrs({
  my: 'auto',
  width: 1 / 3
})`
  text-align: center;
`

export const Image = styled.img`
  max-width: 100px;
  max-width: 100%;
  max-height: 100%;
`

export const Content = styled(Box).attrs({
  px: 1,
  width: 3 / 4
})`
  text-align: center;
  color: white;
`

export const Title = styled.h3`
  margin: 0;
  font-weight: 500;
  color: ${colors.black};
`

export const Subtitle = styled.h5`
  margin: 0;
  font-weight: 300;
  color: ${colors.white};
`

export const Stats = styled(Flex).attrs({
  wrap: false,
  align: 'center',
  justify: 'center'
})``

export const Stat = styled(Box).attrs({
  p: 1
})`
  color: black;
  font-weight: 500;

  header {
    display: block;
    color: white;
    font-weight: 300;
    text-transform: lowercase;
    font-variant: small-caps;
    margin: 0 0 5px;
  }
`

export const Button = styled(ButtonComponent)`
  margin: 15px 15px 0;
  display: block;
  width: calc(100% - 30px);
`
