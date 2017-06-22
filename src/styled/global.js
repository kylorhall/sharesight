import normalizeStyled from 'normalize-styled'
import { injectGlobal } from 'styled-components'

import { colors } from 'styles'

injectGlobal`
  ${normalizeStyled}

  color: ${colors.black};
  min-height: 100%;
  background: ${colors.background.grey};

  body {
    font-family: 'Roboto', sans-serif;
  }
`
