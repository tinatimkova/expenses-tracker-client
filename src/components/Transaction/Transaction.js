import React, { useState, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

const Transaction = props => {
  const [deleted, setDeleted] = useState(false)

  const destroy = () => {
    axios({
      url: `${apiUrl}/transactions/${props.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .then(() => props.msgAlert({
        heading: 'Delete Transacton Success',
        message: messages.deleteTransactionSuccess,
        variant: 'success'
      }))
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/categories' }
    } />
  }
  return (
    <Fragment>
      <h4>{props.note}</h4>
      <p>Amount: {props.amount}</p>
      <p>Date: {props.date}</p>
      <button className='btn btn-outline-danger btn-sm' onClick={destroy}>Delete</button>
      <Link to={`/transactions/${props.id}/edit`}>
        <button className="btn btn-outline-info btn-sm">Edit</button>
      </Link>
    </Fragment>
  )
}

export default Transaction
