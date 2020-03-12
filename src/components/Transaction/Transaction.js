import React, { useState, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

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
        heading: 'Transaction was deleted!',
        message: '',
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Delete Transaction Failed with error: ' + error.message,
          message: '',
          variant: 'danger'
        })
      })
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
