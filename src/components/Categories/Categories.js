import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Footer from '../Footer/Footer'

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
      <Fragment>
        <ol>
          <h4>{categoriesHtml}</h4>
        </ol>
        <Footer />
      </Fragment>
    )
  }
}

export default Categories
