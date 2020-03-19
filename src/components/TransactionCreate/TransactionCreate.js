import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import TransactionForm from '../TransactionForm/TransactionForm'

class TransactionCreate extends Component {
  constructor () {
    super()

    this.state = {
      transaction: {
        amount: '',
        note: '',
        date: '',
        category_id: ''
      },
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/transactions/`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: { transaction: this.state.transaction }
    })
      .then(res => {
        this.setState({ createdId: res.data.transaction.id })
      })
      .then(() => this.props.msgAlert({
        heading: 'Transaction successfully created!',
        message: '',
        variant: 'success'
      }))
      .catch(error => {
        this.props.msgAlert({
          heading: 'Create Transaction Failed with error: ' + error.message,
          message: '',
          variant: 'danger'
        })
      })
  }

  handleChange = (event) => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedTransaction = Object.assign(this.state.transaction, updatedField)

    this.setState({ transaction: editedTransaction })
  }

  render () {
    if (this.state.createdId) {
      // redirect
      return <Redirect
        to={'/categories'}
      />
    }

    return (
      <TransactionForm
        transaction={this.state.transaction}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default TransactionCreate
