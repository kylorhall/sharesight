### Running the Project.
 Open index.html or visit https://kylorhall.github.io/sharesight/ in your browser.


### Building the Project.
 The file is already built and the source is included, but if you wish to re-build it:
 1. npm|yarn install
 2. npm run
 3. Open index.html in a browser.

 It uses /docs to make use of github pages.  Only docs/index.js is programmatically built.


### Technical Decisions
 - I chose `React` as it seemed to be a big part of the job; otherwise I wouldn't have used a framework for something so small.  I did wind up using a handful of bits from previously written code to shave time.
 - I used `styled-components` over my typical usage of scss/css-modules as I wanted to try it out.  First time ever using the library, so I wound up taking longer than I intended (but have no regrets).


### Design Decisions
 - I decided to hide kegs and casks (by image_url) as they more often than not had bad metadata or long names.  This makes it look better overall and from a user perspective, I'd assume a bottle is a better experience than a keg.  I was going to add a checkbox to allow for changing, but it didn't fit anywhere.  It looks better and feels better, plus there's enough results without kegs/casks that I kept it.  It works and looks okay either way – change is in `src/containers/index.js : constructor() : this.state.showKegs`.
 - I chose to keep alcohol-free beers (<1 ABV), but do they really count?
 - I wanted some user input rather than just saying "this is what you drink", so rather than just showing food pairings beneath the beers (which were too lengthy to show), I parsed out all the API's food pairings and made a dropdown of some of the more common words.  I thought about using NLP and building a chatbot or something, but was too far into it by then.
 - I completely ignore pagination, but do get the full 80 requests (if applicable).  Weekend/day + Evening/Morning take care of most of that anyway.


### Time
 - Overall, I spent 5 hours on this.  That's a lot more than I expected, but at least 2 hours were fumbling around with `styled-components` as it's odd in a handful of ways to me.  There were quite a few small changes to Webpack, React, and ESNext since I last started a project from scratch, so I took this as an opportunity to try a few things.  Super MVP (api calling and displaying, no ux or design) was mostly done in the first hour.
