import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

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
          <Fragment key={category.id}>
            <li>
              <Link to={`/categories/${category.id}`}>{category.name}</Link>
            </li>
          </Fragment>
        ))
      }
    } else {
      categoriesHtml = 'Loading...'
    }

    return (
      <Fragment>
        <ul>
          <h4>{categoriesHtml}</h4>
          <Link to={'/create-transaction'}>
            <button className="btn btn-outline-secondary" >New Transaction</button>
          </Link>
        </ul>
      </Fragment>
    )
  }
}

export default Categories
