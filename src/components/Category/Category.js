import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import axios from 'axios'

import apiUrl from '../../apiConfig'

class Category extends Component {
  constructor () {
    super()

    this.state = {
      category: null,
      deleted: false
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

  destroy = () => {
    console.log(this.props)
    axios({
      url: `${apiUrl}/transactions/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
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
            <button onClick={this.destroy}>Delete</button>
          </li>
        ))
      }
    } else {
      // No movie yet...
      categoryHtml = 'Loading...'
    }

    return (
      <div>
        <h4></h4>
        <ul>
          {categoryHtml}
        </ul>
      </div>
    )
  }
}

export default Category
