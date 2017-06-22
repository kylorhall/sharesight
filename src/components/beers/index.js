import React from 'react'
import PropTypes from 'prop-types'
import BeerComponent from 'components/beer'
import { Flex, Box } from 'styled/grid'

const BeersComponent = ({ beers, beerCallback }) => {
  if (!beers.length) return null

  return <Flex wrap align='stretch' justify='center'>
    {beers.map(beer =>
      <Box
        width={[
          1,
          1,
          1 / 2,
          beers.length > 2 ? 1 / 3 : 1 / 2
        ]}
        p={2}
        key={`beer-${beer.id}`}
      >
        {/* Having difficulty making this update as React appears to just re-use this element on re-render, regardless of key changes. */}
        <BeerComponent callback={beerCallback} {...beer} beers={beers} />
      </Box>
    )}
  </Flex>
}

BeersComponent.propTypes = {
  beers: PropTypes.array,
  beerCallback: PropTypes.func
}

export default BeersComponent
