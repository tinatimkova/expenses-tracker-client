import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CategoryTotal from '../CategoryTotal/CategoryTotal'
import Transaction from '../Transaction/Transaction'
import { ListGroup } from 'react-bootstrap'

import axios from 'axios'

import apiUrl from '../../apiConfig'

class LastMonthTransactions extends Component {
  constructor () {
    super()

    this.state = {
      category: null
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/categories/${this.props.match.params.id}/transactions/last_month`,
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
          <ListGroup.Item className='single-transaction' key={transaction.id}>
            <Transaction
              id={transaction.id}
              note={transaction.note}
              amount={transaction.amount}
              date={transaction.date}
              user={this.props.user}
              msgAlert={this.props.msgAlert} />
          </ListGroup.Item>
        ))
        total = <CategoryTotal category={this.state.category} />
      } else {
        return (
          <ListGroup.Item className='single-transaction' variant="warning">
            <h4 className='total'>{'There\'re no transactions in this month yet!'}</h4>
            <div className='go-back-button'>
              <Link to="/categories">&#8678; Go Back</Link>
            </div>
          </ListGroup.Item>
        )
      }
    } else {
      // No category yet...
      categoryHtml = 'Loading...'
    }

    return (
      <ListGroup>
        <h4 className='category-name'>This month</h4>
        {categoryHtml}
        <ListGroup.Item className='total' variant="warning">{total}</ListGroup.Item>
        <div className='go-back-button'>
          <Link to="/categories">&#8678; Go Back</Link>
        </div>
      </ListGroup>
    )
  }
}

export default LastMonthTransactions
