/* eslint-disable camelcase */ // just because we're not normalizing the api and we're lazy
import React from 'react'
import PropTypes from 'prop-types'
import { Beer, ImageWrapper, Image, Content, Title, Subtitle, Stats, Stat, Button, Description } from './styled.js'

const BeerComponent = (props) => {
  const { name, tagline, description, image_url, abv, ebc, ibu, callback, beers } = props

  // This grabs only the first n sentences of the description so long as it's within 200 characters.  Some are really long..
  const getDescription = () => {
    const maxLength = 175
    // https://stackoverflow.com/a/18914855 + comments ... not perfect by any means
    let array = description.replace(/([.?!])\x20{1,}(?=[A-Z\d])/g, '$1|').split('|')

    return (
      array.reduce((text, sentence) => {
        if (text.length + sentence.length < maxLength) text += ' ' + sentence
        return text
      }, '') ||
      (description.slice(0, 200) + '..') // incase this all fails
    ).replace('  ', ' ')
  }

  return <Beer>
    <ImageWrapper>
      <Image src={image_url} alt={name} />
    </ImageWrapper>

    <Content>
      <Title>{name}</Title>
      <Subtitle>{tagline}</Subtitle>

      <Stats>
        {abv && <Stat>
          <header>ABV</header>
          {abv}
        </Stat>}
        {ebc && <Stat>
          <header>EBC</header>
          {ebc}
        </Stat>}
        {ibu && <Stat>
          <header>IBU</header>
          {ibu}
        </Stat>}
      </Stats>

      {beers.length > 1 && callback && typeof callback === 'function'
        ? <Button color='brown' onClick={() => callback(props)}>Choose</Button>
        : <Description>{getDescription()}</Description>
      }
    </Content>
  </Beer>
}

BeerComponent.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  abv: PropTypes.any, // not guaranteed
  ebc: PropTypes.any, // not guaranteed
  ibu: PropTypes.any, // not guaranteed
  callback: PropTypes.func,
  beers: PropTypes.array
}

BeerComponent.defaultProps = {
  beers: []
}

export default BeerComponent
