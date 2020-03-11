import React from 'react'
// import { Link } from 'react-router-dom'

const TransactionForm = ({ transaction, handleChange, handleSubmit }) => (

  <form onSubmit={handleSubmit}>
    <h4>New Transaction</h4>
    <div>
      <label>Date:</label>
      <input
        name='date'
        placeholder='Date'
        value={ transaction.date }
        type='date'
        onChange={handleChange}
      />
    </div>

    <div>
      <label>Amount:</label>
      <input
        name='amount'
        placeholder='Amount spent'
        value={ transaction.amount }
        type='decimal'
        min='0'
        onChange={handleChange}
      />
    </div>

    <div>
      <label>Note:</label>
      <input
        name='note'
        placeholder='Description'
        value={ transaction.note }
        onChange={handleChange}
      />
    </div>

    <div>
      <label>Category:</label>
      <select name="category_id" size="10" onChange={handleChange}>
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
      </select>
    </div>

    <button type='submit'>Submit</button>
  </form>

)

export default TransactionForm
