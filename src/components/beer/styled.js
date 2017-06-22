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
  background: linear-gradient(to bottom,
    transparent 15%, ${colors.yellow} 15%, ${colors.yellow} 85%, transparent 85%
  );
  color: ${colors.black};
  min-height: 100%;
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
  margin: 0 0 4px;
  font-size: 1.1em;
  font-weight: 500;
  color: ${colors.black};
`

export const Subtitle = styled.h4`
  margin: 0 0 8px;
  font-size: 1em;
  font-weight: 400;
  color: ${colors.brown};
`

export const Stats = styled(Flex).attrs({
  wrap: false,
  align: 'center',
  justify: 'center'
})`
  margin: 16px 0;
`

export const Stat = styled(Box).attrs({
  p: 1
})`
  color: black;
  font-weight: 500;
  border-radius: 50%;

  // these are colors.brown, not sure how I'd convert them..variables needs some help
  background: rgba(205, 85, 28, .25);
  border: 1px solid rgba(205, 85, 28, .1);

  width: 60px;
  height: 60px;
  margin: 0 5px;

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

export const Description = styled.p`
  margin: 15px 15px 0;
  color: ${colors.black};
`
