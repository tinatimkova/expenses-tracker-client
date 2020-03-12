import React from 'react'

const CategoryTotal = props => {
  let total = 0
  props.category.map(function (transaction) {
    total = total + transaction.amount
  })

  return (
    <h5>Total: {total}</h5>
  )
}

export default CategoryTotal
