import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { ListGroup, Button } from 'react-bootstrap'
import { icons } from '../../icons/Icons'
import store from '../store'

class Categories extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: null,
      categoryTotal: null
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/categories`)
      .then(res => {
        this.setState({ categories: res.data.categories })
        const categoryTotal = []
        res.data.categories.map(category => {
          let total = 0
          category.transactions.map(transaction => {
            if (transaction.user_id === this.props.user.id) {
              total += Number(transaction.amount)
            }
          })
          categoryTotal.push(total)
        })
        this.setState({ categoryTotal: categoryTotal })
      })
      .catch(console.error)
  }

  onCreateTransaction = event => {
    event.preventDefault()
    return <Redirect to='/create-transaction' />
  }

  render () {
    const { categories, categoryTotal } = this.state
    let categoriesHtml

    if (categories && categoryTotal) {
      if (categories.length && categoryTotal.length) {
        categoriesHtml = categories.map((category, index) => (
          <ListGroup.Item className='categories' key={category.id}>
            <Link to={`/categories/${category.id}`}><img className='icons' src={icons[index].icon} />{category.name}<span>{categoryTotal[index]}</span></Link>
          </ListGroup.Item>
        ))
        store.categoryTotal = categoryTotal
      } else {
        categoriesHtml = 'Loading...'
      }
    }

    return (
      <ListGroup>
        <h4>{categoriesHtml}</h4>
        <Link to={'/create-transaction'}>
          <div>
            <Button className='new-transaction-button' onSubmit={this.onCreateTransaction.bind(this)} block>New Transaction</Button>
          </div>
        </Link>
      </ListGroup>
    )
  }
}

export default Categories
