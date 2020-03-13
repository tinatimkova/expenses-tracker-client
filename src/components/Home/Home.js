import React, { Fragment } from 'react'

const Home = props => {
  return (
    <Fragment>
      <h1>{'Can\'t figure out how to keep track of your monthly spendings?'}</h1>
      <div className='home-page-img'>
        <img src={ require('./Home_page.png') } />
      </div>
      <h1>{'ExpTracker will do it for you!'}</h1>
    </Fragment>
  )
}

export default Home
