import React from 'react'
import moment from 'moment'
import Promise from 'bluebird' // not actualy sure if I need this with babel-polyfill to be honest

import BeersComponent from 'components/beers'
import FoodComponent from 'components/food'
import WorkComponent from 'components/work'

import 'styled/global'
import { Page, Header, Logo, Image, Emoji, Title, Search, StatusText, Button, Loading } from './styled'

import Api from 'helpers/api'

export default class Container extends React.Component {
  constructor (props) {
    super(props)

    this.moment = moment()
    this.state = {
      loaded: false,
      statusText: 'Loading beers..',

      showKegs: false, // I'm going to assume most people don't buy kegs
      food: undefined,
      work: undefined,
      beers: [],
      beer: undefined
    }
  }

  componentDidMount () {
    this.updateBeers()
  }

  // helper to use await setState() in Promise.all later
  setStatePromise = (newState) => {
    return new Promise(resolve => {
      this.setState(newState, () => { resolve() })
    })
  }

  // note: this context is currently a part ES2016 Stage 1 via transform-class-properties
  updateWorkState = (work) => {
    const callback = this.state.work !== work ? this.updateBeers : () => {} // should use async/await via setStatePromise here, whatever
    this.setState({ work }, callback)
  }

  updateFoodState = (food) => {
    const callback = this.state.food !== food ? this.updateBeers : () => {}
    this.setState({ food }, callback)
  }

  // We already have the query saved, so just re-process it.
  updateShowKegs = async (value) => {
    if (this.state.showKegs === !!value) return
    await this.setStatePromise({ showKegs: !!value })

    const processed = this.processBeers(this.state.rawBeers)

    return this.setState({
      beer: undefined,
      beers: processed,
      statusText: this.beersStatusText(processed)
    })
  }

  selectBeer = (beer) => {
    return this.setStatePromise({
      beer,
      statusText: 'Enjoy your beer!'
    })
  }

  clearBeer = () => {
    let update = false
    if (this.state.food || this.state.work) update = true

    return this.setStatePromise({
      beer: undefined,
      food: undefined,
      work: undefined,
      statusText: this.beersStatusText()
    }).then(() => {
      if (update) return this.updateBeers()
    })
  }

  beersStatusText = (collection = this.state.beers) => {
    if (!collection || !collection.length) return `I guess we didn't find any beers in your fridge..`
    if (collection.length === 1) return 'We found the perfect beer for you.'

    return <div>
      Decision time.
      <br /><small>We found {collection.length} beers you'll love.</small>
    </div>
  }

  isMorning = () => {
    let h = this.moment.format('H')
    return h >= 6 && h <= 12 // Morning = 6pm - noon (opinion)
  }

  isEvening = () => {
    let h = this.moment.format('H')
    return h >= 17 && h <= 24 // Evening = 5pm onward (opinion)
  }

  isWeekend = () => {
    let d = this.moment.format('d')
    return d === 5 || d === 6
  }

  generateBeersQuery = () => {
    let query = {}
    this.moment = moment() // refresh the date every query

    if (this.isMorning()) query.ebc_lt = 10
    else if (this.isEvening()) query.ebc_gt = 30

    if (this.isWeekend()) query.abv_gt = 6
    else query.abv_lt = 4

    if (this.state.food) query.food = this.state.food.replace(' ', '_') // search by foods!
    if (this.state.work && this.state.work.includes('tax')) query.ibu_gt = 50 // working on tax something

    return query
  }

  processBeers = (beers) => {
    if (!beers || !beers.length) return beers
    let array = beers.slice(0)

    // sort by ABV based on day of week first
    if (this.isWeekend()) array.sort((a, b) => b.abv - a.abv) // higher alcohol beers first
    else array.sort((a, b) => a.abv - b.abv) // lower alcohol beers

    // sort by EBC based on time second
    if (this.isMorning()) array.sort((a, b) => a.ebc - b.ebc) // lighter beers first
    else if (this.isEvening()) array.sort((a, b) => b.ebc - a.ebc) // darker beers first

    if (!this.state.showKegs) {
      let filtered = array.filter(beer => !beer.image_url.includes('/keg.png') && !beer.image_url.includes('/cask.png'))
      if (filtered.length) array = filtered
    }

    return array
  }

  getBeers = () => {
    return Api(this.generateBeersQuery())
  }

  updateBeers = async () => {
    const [ stateResult, beers ] = await Promise.all([ // eslint-disable-line no-unused-vars
      this.setStatePromise({
        loaded: false,
        statusText: 'Loading beers..'
      }), // set state isn't sync, so just confirm it finishes before trying to set the state again
      this.getBeers()
    ])

    const processed = this.processBeers(beers)

    return this.setStatePromise({
      beer: undefined,
      rawBeers: beers,
      beers: processed, // do it here so we're not mutating the state
      loaded: true,
      statusText: this.beersStatusText(processed)
    })
  }

  render () {
    return <Page>
      <Header>
        <Logo>
          <Image />
        </Logo>

        <Emoji>
          + 🍺
        </Emoji>
      </Header>

      {this.state.beer
        ? null
        : <Title>
          <h3>I heard you're looking for a beer.</h3>
          <p>Pick one below or help us find one to go with what you're eating or working on.</p>
        </Title>
      }

      {this.state.beer
        ? null
        : <Search>
          <FoodComponent value={this.state.food} callback={this.updateFoodState} />
          <WorkComponent value={this.state.work} callback={this.updateWorkState} />
        </Search>
      }

      <StatusText>
        {this.state.statusText}

        {this.state.loaded && (this.state.beer || this.state.beers.length <= 1)
          ? <Button color='black' onClick={() => this.clearBeer()}>Find Another Beer</Button>
          : null
        }
      </StatusText>

      {!this.state.loaded
        ? <Loading />
        : this.state.beer
          ? <BeersComponent beers={[this.state.beer]} />
          : <BeersComponent beers={this.state.beers} beerCallback={this.selectBeer} />
      }
    </Page>
  }
}
