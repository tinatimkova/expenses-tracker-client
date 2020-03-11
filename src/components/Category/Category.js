import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Transaction from '../Transaction/Transaction'

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
    console.log(this.props.match)

    if (category) {
      if (category.length) {
        // Handle we deleted the movies
        categoryHtml = category.map(transaction => (
          <li key={transaction.id}>
            <Transaction
              id={transaction.id}
              note={transaction.note}
              amount={transaction.amount}
              date={transaction.date}
              user={this.props.user}/>
          </li>
        ))
      }
    } else {
      // No movie yet...
      categoryHtml = 'Loading...'
    }

    return (
      <div>
        <ul>
          <h4></h4>
          {categoryHtml}
        </ul>
        <Link to={'/create-transaction'}>
          <button>New Transaction</button>
        </Link>
      </div>
    )
  }
}

export default Category
