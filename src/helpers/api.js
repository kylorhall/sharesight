import 'whatwg-fetch'

// Does the dirty work for the query transformation.
// { a: 1, b: 2 } => ?a=1&b=2
function createQueryString (query) {
  if (!Object.keys(query).length) return ''

  // already have per_page in the base url
  return '&' + Object.keys(query)
    .reduce((memo, key) => {
      memo.push(`${key}=${encodeURIComponent(query[key])}`)
      return memo
    }, [])
    .join('&')
}

// For processing the fetch response.
function parseAndValidate (response) {
  // We can extract the x-ratelimit-limit and x-ratelimit-remaining here, if we wanted..
  // We'd toss that into more complex, normalized API response..  Irrelevant for this implementation.

  // 204 should have no content, so response.json() would fail.
  if (response.status === 204) return { success: true }

  return response.json().then(resp => {
    if (response.status >= 200 && response.status < 300) return resp

    let error = {
      name: resp.name || response.statusText,
      status: resp.status || response.status,
      message: resp.message
    }

    throw error
  })
}

/**
 * Asynchronous function to grab the API.
 * @param {Object} query - Formatted as such that { abv_gt: 6 } gets turned into a query string (?abv_gt=6)
 * @return {Promise} - Promise returns an array of results (can be empty).  Errors can easily stem from this function.
 */
export default function Api (query = {}) {
  const url = `https://api.punkapi.com/v2/beers?per_page=80${createQueryString(query)}`

  // we could cache every query via url here as the API seems to be static and return cached results

  return fetch(url, {
    method: 'get'
  }).then(parseAndValidate)
    .then(payload => {
      // process beers

      // save the beers into a cache here

      // There often aren't foods to match with specific beer queries.  I don't want to go full machine learning here, so meh..
      if (payload.length === 0 && query.food) {
        const { food, ...newQuery } = query
        return Api(newQuery)
      }

      // Call a new query if ibu_gt was present (from tax reports) and there's no results
      if (payload.length === 0 && query.ibu_gt) {
        const { ibu_gt, ...newQuery } = query
        return Api(newQuery)
      }

      return payload
    })
    .catch(error => {
      console.error(`Error @ fetching the beers via ${url}`, error)
      throw error
    })
}
