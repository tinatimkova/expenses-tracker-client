import React, { Component } from 'react'
import { Chart } from 'react-google-charts'

class RecommendedBudget extends Component {
  render () {
    const data = this.props.total
    let total = 0
    data.map(category => {
      if (typeof (category[1]) === 'number') {
        total += category[1]
      }
    })
    const totalExpenses = total.toFixed(2)
    const recommendedExpenses = [[], ['Housing', totalExpenses * 0.35],
      ['Shopping', totalExpenses * 0.05],
      ['Travel & Entertainment', totalExpenses * 0.05],
      ['Education', totalExpenses * 0.05],
      ['Bills & Utilities', totalExpenses * 0.05],
      ['Gifts', totalExpenses * 0.05],
      ['Healthcare', totalExpenses * 0.1],
      ['Food & Dining', totalExpenses * 0.15],
      ['Transport & Auto', totalExpenses * 0.1],
      ['Kids', totalExpenses * 0.05]]
    data.map((category, index) => {
      if (index === 0) {
        category[2] = 'Recommended Total'
      } else {
        const recommended = recommendedExpenses[index]
        category[2] = recommended[1]
      }
      index += 1
    })
    return (
      <div className='recommended-budget'>
        <h4 className='chart-title'>Recommended Budget Percentages by Category</h4>
        <Chart
          width={'700px'}
          height={'500px'}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            isStacked: true,
            // title: 'Recommended Budget Percentages by Category',
            // hAxis: { title: 'Categories', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: '60%', height: '67%', left: 80, top: 60 },
            backgroundColor: {
              stroke: '#4322c0',
              strokeWidth: 4
            }
          // lineWidth: 25
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />
      </div>)
  }
}

export default RecommendedBudget
