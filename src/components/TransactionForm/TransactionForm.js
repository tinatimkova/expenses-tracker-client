import React from 'react'

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
        type='number'
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
      <select name="category" size="10" multiple>
        <option value="Housing" data-id='1'>Housing</option>
        <option value="Food & Dining" data-id='2'>Food & Dining</option>
        <option value="Shopping" data-id='3'>Shopping</option>
        <option value="Travel & Entertainment" data-id='4'>Travel & Entertainment</option>
        <option value="Transport & Auto" data-id='5'>Transport & Auto</option>
        <option value="Education" data-id='6'>Education</option>
        <option value="Utilities & Bills" data-id='7'>Utilities & Bills</option>
        <option value="Gifts" data-id='8'>Gifts</option>
        <option value="Healthcare" data-id='9'>Healthcare</option>
        <option value="Kids" data-id='10'>Kids</option>
      </select>
    </div>

    <button type='submit'>Submit</button>

  </form>
)

export default TransactionForm
