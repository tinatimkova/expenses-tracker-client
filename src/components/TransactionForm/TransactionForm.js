import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TransactionForm = ({ transaction, handleChange, handleSubmit }) => (

  <Form onSubmit={handleSubmit}>
    <h4>New Transaction</h4>
    <Form.Group>
      <Form.Label>Date:</Form.Label>
      <Form.Control
        name='date'
        placeholder='Date'
        value={ transaction.date }
        type='date'
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label>Amount $:</Form.Label>
      <Form.Control
        name='amount'
        placeholder='How much money was spent'
        value={ transaction.amount }
        type='decimal'
        min='0'
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label>Note:</Form.Label>
      <Form.Control
        name='note'
        placeholder='Description'
        value={ transaction.note }
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group>
      <Form.Label>Category:</Form.Label>
      <Form.Control as="select" name="category_id" size="10" onChange={handleChange}>
        <option value={ 1 }>Housing</option>
        <option value={ 2 }>Food & Dining</option>
        <option value={ 3 }>Shopping</option>
        <option value={ 4 }>Travel & Entertainment</option>
        <option value={ 5 }>Transport & Auto</option>
        <option value={ 6 }>Education</option>
        <option value={ 7 }>Utilities & Bills</option>
        <option value={ 8 }>Gifts</option>
        <option value={ 9 }>Healthcare</option>
        <option value={ 10 }>Kids</option>
      </Form.Control>
    </Form.Group>

    <div className='form-submit-button'>
      <button type='submit'>Submit</button>
    </div>
    <div className='go-back-button'>
      <Link to="/categories">&#8678; Go Back</Link>
    </div>
  </Form>

)

export default TransactionForm
