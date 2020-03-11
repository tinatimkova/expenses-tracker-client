import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import TransactionCreate from '../TransactionCreate/TransactionCreate'

class Categories extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: null
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/categories`)
      .then(res => {
        this.setState({ categories: res.data.categories })
      })
      .catch(console.error)
  }

  onSubmit = event => {
    event.preventDefault()
    return <Redirect to='/create-transaction' />
  }

  render () {
    const { categories } = this.state

    let categoriesHtml

    if (categories) {
      if (categories.length) {
        categoriesHtml = categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))
      }
    } else {
      categoriesHtml = 'Loading...'
    }

    // <button onClick={this.props.onSubmit}>New Transaction</button>
    return (
      <Fragment>
        <ol>
          <h4>{categoriesHtml}</h4>
        </ol>
        <Link to={'/create-transaction'}>
          <button>New Transaction</button>
        </Link>
      </Fragment>
    )
  }
}

export default Categories
