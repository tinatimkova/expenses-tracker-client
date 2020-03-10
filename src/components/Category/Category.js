import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'

import apiUrl from '../../apiConfig'

class Category extends Component {
  constructor () {
    super()

    this.state = {
      category: null
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/categories/${this.props.match.params.id}/transactions`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ category: res.data.transactions })
      })
      .catch(console.error)
  }

  render () {
    const { category } = this.state
    let categoryHtml

    if (category) {
      if (category.length) {
        // Handle we deleted the movies
        categoryHtml = category.map(transaction => (
          <li key={transaction.id}>
            <p>{transaction.note}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.date}</p>
          </li>
        ))
      }
    } else {
      // No movie yet...
      categoryHtml = 'Loading...'
    }

    return (
      <div>
        <h4>Category:</h4>
        <ul>
          {categoryHtml}
        </ul>
      </div>
    )
  }
}

export default Category
