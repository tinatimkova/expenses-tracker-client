import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import TransactionForm from '../TransactionForm/TransactionForm'

class TransactionEdit extends Component {
  constructor () {
    super()

    this.state = {
      transaction: {
        amount: '',
        note: '',
        date: '',
        category_id: ''
      },
      updated: false
    }
  }

  componentDidMount () {
  // This is where the API request goes
    axios({
      url: `${apiUrl}/transactions/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ transaction: res.data.transaction })
      })
      .catch(console.error)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/transactions/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { transaction: this.state.transaction }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .then(() => this.props.msgAlert({
        heading: 'Transaction successfully updated!',
        message: '',
        variant: 'success'
      }))
      .catch(error => {
        this.props.msgAlert({
          heading: 'Update Transaction Failed with error: ' + error.message,
          message: '',
          variant: 'danger'
        })
      })
  }

    handleChange = (event) => {
      const updatedField = {
        [event.target.name]: event.target.value
      }

      // Combine this updatedField with the current state
      // Store in new object
      const editedTransaction = Object.assign(this.state.transaction, updatedField)

      // Actually call setState
      this.setState({ transaction: editedTransaction })
    }

    render () {
      if (this.state.updated) {
      // redirect
        return <Redirect
          to={'/categories'}
        />
      }
      return (
        <div>
          <TransactionForm
            transaction={this.state.transaction}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Link to='/categories/'>Back to categories</Link>
        </div>
      )
    }
}

export default TransactionEdit
