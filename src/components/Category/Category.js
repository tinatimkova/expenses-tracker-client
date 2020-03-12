import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Transaction from '../Transaction/Transaction'
import CategoryTotal from '../CategoryTotal/CategoryTotal'

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
    let total

    if (category) {
      if (category.length) {
        // Handle we deleted the movies

        categoryHtml = category.map(transaction => (
          <Fragment key={transaction.id}>
            <li>
              <Transaction
                id={transaction.id}
                note={transaction.note}
                amount={transaction.amount}
                date={transaction.date}
                user={this.props.user}
                msgAlert={this.props.msgAlert} />
            </li>
          </Fragment>
        ))
        total = <CategoryTotal category={this.state.category} />
      }
    } else {
      // No movie yet...
      categoryHtml = 'Loading...'
    }

    return (
      <Fragment>
        <ul>
          <h4></h4>
          {categoryHtml}
          {total}
          <Link to={`/categories/${this.props.match.params.id}/transactions/last_month`}>
            <button className="btn btn-outline-info btn-sm">Last Month</button>
          </Link>
          <Link to="/categories">&#8678; Go Back</Link>
        </ul>
      </Fragment>
    )
  }
}

export default Category
