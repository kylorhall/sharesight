import styled from 'styled-components'
import { RotateSpinLoader } from 'react-css-loaders'

import { colors } from 'styles'
import { Flex, Box } from 'styled/grid'
import ButtonComponent from 'components/button'

export const Page = styled(Flex).attrs({
  column: true,
  wrap: false,
  align: 'center',
  justify: 'center',
  p: 4
})`
`

export const Header = styled(Flex).attrs({
  wrap: false,
  align: 'center',
  justify: 'center',
  mb: 2
})`
  width: 100%;
`

export const Logo = styled(Box).attrs({
  m: 'auto',
  width: 1 / 2,
  px: 1
})`
  text-align: right;
`

export const Image = styled.img.attrs({
  src: 'sharesight.svg' // just seeing how this works...
})`
  max-width: 100px;
  max-width: 100%;
  max-height: 100%;
`

export const Emoji = styled(Box).attrs({
  px: 1,
  width: 1 / 2
})`
  font-size: 4rem;
  margin: 20px 0 0 5px; // add a bit more to the left of the + sign
  font-weight: 100;
  color: ${colors.black};
`

export const Title = styled.div`
  text-align: center;

  p {
    color: #555;
    margin: 16px 0;
  }
`

export const Search = styled.div`
  text-align: center;
`

export const StatusText = styled.h3`
  text-align: center;
  font-weight: 400;
  color: ${colors.black};
`

export const Loading = styled(RotateSpinLoader).attrs({
  color: colors.brown,
  size: 10
})`
`

export const Button = styled(ButtonComponent)`
  margin: 16px auto;
  display: block;
  color: white;
`
