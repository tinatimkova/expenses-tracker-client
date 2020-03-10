import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Expenses extends Component {
  constructor () {
    super()

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

    return (
      <ol>
        <h4>{categoriesHtml}</h4>
      </ol>
    )
  }
}

export default Expenses
