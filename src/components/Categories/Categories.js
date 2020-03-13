import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { ListGroup, Button } from 'react-bootstrap'

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
          <ListGroup.Item key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </ListGroup.Item>
        ))
      }
    } else {
      categoriesHtml = 'Loading...'
    }

    return (
      <ListGroup>
        <h4>{categoriesHtml}</h4>
        <Link to={'/create-transaction'}>
          <div>
            <Button className='new-transaction-button' block>New Transaction</Button>
          </div>
        </Link>
      </ListGroup>
    )
  }
}

export default Categories
