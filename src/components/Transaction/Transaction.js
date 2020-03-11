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
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/categories', state: { msg: 'Transaction succesfully deleted!'} }
  } />

  return (
    <Fragment>
      <h4>{props.note}</h4>
      <p>Amount: {props.amount}</p>
      <p>Date: {props.date}</p>
      <button onClick={destroy}>Delete</button>
      <Link to={`/transactions/${props.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/categories">Back to categories</Link>
    </Fragment>
  )
}

export default Transaction
